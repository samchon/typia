import { CommentFactory } from "../../factories/CommentFactory";

import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { IJsonSchema } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_object =
  (options: JsonApplicationProgrammer.IOptions) =>
  (components: IJsonComponents) =>
  (obj: MetadataObject) =>
  (nullable: boolean): IJsonSchema.IReference | IJsonSchema.IObject => {
    if (obj._Is_literal() === true)
      return create_object_schema(options)(components)(obj)(nullable);

    const key: string =
      options.purpose === "ajv"
        ? obj.name
        : `${obj.name}${nullable ? ".Nullable" : ""}`;
    const $ref: string = `${JSON_COMPONENTS_PREFIX}/schemas/${key}`;
    if (components.schemas?.[key] !== undefined) return { $ref };

    const object: IJsonComponents.IAlias = {
      $id: options.purpose === "ajv" ? $ref : undefined,
    };
    components.schemas ??= {};
    components.schemas[key] = object;
    Object.assign(
      object,
      create_object_schema(options)(components)(obj)(nullable),
    );
    return { $ref };
  };

const create_object_schema =
  (options: JsonApplicationProgrammer.IOptions) =>
  (components: IJsonComponents) =>
  (obj: MetadataObject) =>
  (nullable: boolean): IJsonSchema.IObject => {
    // ITERATE PROPERTIES
    const properties: Record<string, any> = {};
    const extraMeta: ISuperfluous = {
      patternProperties: {},
      additionalProperties: undefined,
    };
    const required: string[] = [];

    for (const property of obj.properties) {
      if (
        // FUNCTIONAL TYPE
        property.value.functional === true &&
        property.value.nullable === false &&
        property.value.isRequired() === true &&
        property.value.size() === 0
      )
        continue;
      else if (property.jsDocTags.find((tag) => tag.name === "hidden"))
        continue; // THE HIDDEN TAG

      const key: string | null = property.key.getSoleLiteral();
      const schema: IJsonSchema | null = application_schema(options)(true)(
        components,
      )(property.value)({
        deprecated:
          property.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: (() => {
          const info: IJsDocTagInfo | undefined = property.jsDocTags.find(
            (tag) => tag.name === "title",
          );
          if (info?.text?.length) return CommentFactory.merge(info.text);
          else if (!property.description?.length) return undefined;

          const index: number = property.description.indexOf("\n");
          const top: string = (
            index === -1
              ? property.description
              : property.description.substring(0, index)
          ).trim();
          return top.endsWith(".")
            ? top.substring(0, top.length - 1)
            : undefined;
        })(),
        description: property.description ?? undefined,
        ...(options.surplus
          ? {
              "x-typia-required": property.value.required,
              "x-typia-optional": property.value.optional,
            }
          : {}),
        "x-typia-jsDocTags": (() => {
          const filtered = property.jsDocTags.filter(
            (tag) =>
              tag.name !== "title" &&
              tag.name !== "deprecated" &&
              tag.name !== "hidden",
          );
          return filtered.length ? filtered : undefined;
        })(),
      });

      if (schema === null) continue;
      if (options.surplus === false && schema["x-typia-jsDocTags"]?.length)
        delete schema["x-typia-jsDocTags"];
      if (key !== null) {
        properties[key] = schema;
        if (property.value.isRequired() === true) required.push(key);
      } else {
        const pattern: string = metadata_to_pattern(true)(property.key);
        if (pattern === PatternUtil.STRING)
          extraMeta.additionalProperties = [property.value, schema];
        else extraMeta.patternProperties[pattern] = [property.value, schema];
      }
    }

    const extraProps = {
      additionalProperties: extraMeta.additionalProperties?.[1],
      patternProperties: (() => {
        if (Object.keys(extraMeta.patternProperties).length === 0)
          return undefined;
        const output: Record<string, IJsonSchema> = {};
        for (const [key, value] of Object.entries(extraMeta.patternProperties))
          output[key] = value[1];
        return output;
      })(),
    };
    return {
      // $recursiveAnchor:
      //     (options.purpose === "ajv" && obj.recursive) || undefined,
      type: "object",
      properties,
      nullable: options.purpose === "swagger" ? nullable : undefined,
      required: required.length ? required : undefined,
      title: (() => {
        const info: IJsDocTagInfo | undefined = obj.jsDocTags.find(
          (tag) => tag.name === "title",
        );
        return info?.text?.length ? CommentFactory.merge(info.text) : undefined;
      })(),
      description: obj.description,
      ...(options.surplus ? { "x-typia-jsDocTags": obj.jsDocTags } : {}),
      ...(options.purpose === "ajv"
        ? extraProps
        : options.surplus
          ? {
              // swagger can't express patternProperties
              "x-typia-additionalProperties": extraProps.additionalProperties,
              "x-typia-patternProperties": extraProps.patternProperties,
              additionalProperties: join(options)(components)(extraMeta),
            }
          : {}),
    };
  };

const join =
  (options: JsonApplicationProgrammer.IOptions) =>
  (components: IJsonComponents) =>
  (extra: ISuperfluous): IJsonSchema | undefined => {
    // LIST UP METADATA
    const elements: [Metadata, IJsonSchema][] = Object.values(
      extra.patternProperties || {},
    );
    if (extra.additionalProperties) elements.push(extra.additionalProperties);

    // SHORT RETURN
    if (elements.length === 0) return undefined;
    else if (elements.length === 1) return elements[0]![1]!;

    // MERGE METADATA AND GENERATE VULNERABLE SCHEMA
    const meta: Metadata = elements
      .map((tuple) => tuple[0])
      .reduce((x, y) => Metadata.merge(x, y));
    return (
      application_schema(options)(true)(components)(meta)(
        options.surplus
          ? {
              "x-typia-required": false,
            }
          : {},
      ) ?? undefined
    );
  };

interface ISuperfluous {
  additionalProperties?: undefined | [Metadata, IJsonSchema];
  patternProperties: Record<string, [Metadata, IJsonSchema]>;
}
