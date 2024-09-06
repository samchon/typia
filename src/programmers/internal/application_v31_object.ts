import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { application_description } from "./application_description";
import { application_title } from "./application_title";
import { application_v31_schema } from "./application_v31_schema";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const application_v31_object =
  (components: OpenApi.IComponents) =>
  (
    obj: MetadataObject,
  ): OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject => {
    if (obj.isLiteral() === true) return create_object_schema(components)(obj);

    const key: string = obj.name;
    const $ref: string = `#/components/schemas/${key}`;
    if (components.schemas?.[key] !== undefined) return { $ref };

    const object: OpenApiV3.IJsonSchema = {};
    components.schemas ??= {};
    components.schemas[key] = object;
    Object.assign(object, create_object_schema(components)(obj));
    return { $ref };
  };

/**
 * @internal
 */
const create_object_schema =
  (components: OpenApi.IComponents) =>
  (obj: MetadataObject): OpenApi.IJsonSchema.IObject => {
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
      const schema: OpenApi.IJsonSchema | null = application_v31_schema(true)(
        components,
      )({
        deprecated:
          property.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: application_title(property),
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
  (components: OpenApi.IComponents) =>
  (extra: ISuperfluous): OpenApi.IJsonSchema | undefined => {
    // LIST UP METADATA
    const elements: [Metadata, OpenApi.IJsonSchema][] = Object.values(
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
    return application_v31_schema(true)(components)({})(meta) ?? undefined;
  };

/**
 * @internal
 */
interface ISuperfluous {
  additionalProperties?: undefined | [Metadata, OpenApi.IJsonSchema];
  patternProperties: Record<string, [Metadata, OpenApi.IJsonSchema]>;
}
