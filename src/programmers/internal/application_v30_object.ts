import { OpenApiV3 } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { application_description } from "./application_description";
import { application_v30_schema } from "./application_v30_schema";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_v30_object =
  (components: OpenApiV3.IComponents) =>
  (obj: MetadataObject) =>
  (
    nullable: boolean,
  ): OpenApiV3.IJsonSchema.IReference | OpenApiV3.IJsonSchema.IObject => {
    if (obj.isLiteral() === true)
      return create_object_schema(components)(obj)(nullable);

    const key: string = `${obj.name}${nullable ? ".Nullable" : ""}`;
    const $ref: string = `#/components/schemas/${key}`;
    if (components.schemas?.[key] !== undefined) return { $ref };

    const object: OpenApiV3.IJsonSchema = {};
    components.schemas ??= {};
    components.schemas[key] = object;
    Object.assign(object, create_object_schema(components)(obj)(nullable));
    return { $ref };
  };

/**
 * @internal
 */
const create_object_schema =
  (components: OpenApiV3.IComponents) =>
  (obj: MetadataObject) =>
  (nullable: boolean): OpenApiV3.IJsonSchema.IObject => {
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
        property.value.functions.length &&
        property.value.nullable === false &&
        property.value.isRequired() === true &&
        property.value.size() === 0
      )
        continue;
      else if (property.jsDocTags.find((tag) => tag.name === "hidden"))
        continue; // THE HIDDEN TAG

      const key: string | null = property.key.getSoleLiteral();
      const schema: OpenApiV3.IJsonSchema | null = application_v30_schema(true)(
        components,
      )({
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
        description: application_description(property),
      })(property.value);

      if (schema === null) continue;
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

    return {
      type: "object",
      properties,
      nullable,
      required: required.length ? required : undefined,
      title: (() => {
        const info: IJsDocTagInfo | undefined = obj.jsDocTags.find(
          (tag) => tag.name === "title",
        );
        return info?.text?.length ? CommentFactory.merge(info.text) : undefined;
      })(),
      description: application_description(obj),
      additionalProperties: join(components)(extraMeta),
    };
  };

/**
 * @internal
 */
const join =
  (components: OpenApiV3.IComponents) =>
  (extra: ISuperfluous): OpenApiV3.IJsonSchema | undefined => {
    // LIST UP METADATA
    const elements: [Metadata, OpenApiV3.IJsonSchema][] = Object.values(
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
    return application_v30_schema(true)(components)({})(meta) ?? undefined;
  };

/**
 * @internal
 */
interface ISuperfluous {
  additionalProperties?: undefined | [Metadata, OpenApiV3.IJsonSchema];
  patternProperties: Record<string, [Metadata, OpenApiV3.IJsonSchema]>;
}
