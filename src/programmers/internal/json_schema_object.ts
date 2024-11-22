import { OpenApi } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { json_schema_description } from "./json_schema_description";
import { json_schema_plugin } from "./json_schema_plugin";
import { json_schema_station } from "./json_schema_station";
import { json_schema_title } from "./json_schema_title";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const json_schema_object = (props: {
  components: OpenApi.IComponents;
  object: MetadataObject;
}): Array<OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject> =>
  json_schema_plugin({
    schema: emplace_object(props),
    tags: props.object.tags,
  });

const emplace_object = (props: {
  components: OpenApi.IComponents;
  object: MetadataObject;
}): OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject => {
  if (props.object.type.isLiteral() === true)
    return create_object_schema(props);

  const key: string = props.object.type.name;
  const $ref: string = `#/components/schemas/${key}`;
  if (props.components.schemas?.[key] !== undefined) return { $ref };

  const lazy: OpenApi.IJsonSchema = {};
  props.components.schemas ??= {};
  props.components.schemas[key] = lazy;
  Object.assign(lazy, create_object_schema(props));
  return { $ref };
};

/**
 * @internal
 */
const create_object_schema = (props: {
  components: OpenApi.IComponents;
  object: MetadataObject;
}): OpenApi.IJsonSchema.IObject => {
  // ITERATE PROPERTIES
  const properties: Record<string, any> = {};
  const extraMeta: ISuperfluous = {
    patternProperties: {},
    additionalProperties: undefined,
  };
  const required: string[] = [];

  for (const property of props.object.type.properties) {
    if (
      // FUNCTIONAL TYPE
      property.value.functions.length &&
      property.value.nullable === false &&
      property.value.isRequired() === true &&
      property.value.size() === 0
    )
      continue;
    else if (property.jsDocTags.find((tag) => tag.name === "hidden")) continue; // THE HIDDEN TAG

    const key: string | null = property.key.getSoleLiteral();
    const schema: OpenApi.IJsonSchema | null = json_schema_station({
      blockNever: true,
      components: props.components,
      attribute: {
        deprecated:
          property.jsDocTags.some((tag) => tag.name === "deprecated") ||
          undefined,
        title: json_schema_title(property),
        description: json_schema_description(property),
      },
      metadata: property.value,
    });

    if (schema === null) continue;
    if (key !== null) {
      properties[key] = schema;
      if (property.value.isRequired() === true) required.push(key);
    } else {
      const pattern: string = metadata_to_pattern({
        top: true,
        metadata: property.key,
      });
      if (pattern === PatternUtil.STRING)
        extraMeta.additionalProperties = [property.value, schema];
      else extraMeta.patternProperties[pattern] = [property.value, schema];
    }
  }

  return {
    type: "object",
    properties,
    required,
    title: (() => {
      const info: IJsDocTagInfo | undefined = props.object.type.jsDocTags.find(
        (tag) => tag.name === "title",
      );
      return info?.text?.length ? CommentFactory.merge(info.text) : undefined;
    })(),
    description: json_schema_description(props.object.type),
    additionalProperties: join({
      components: props.components,
      extra: extraMeta,
    }),
  };
};

/**
 * @internal
 */
const join = (props: {
  components: OpenApi.IComponents;
  extra: ISuperfluous;
}): OpenApi.IJsonSchema | undefined => {
  // LIST UP METADATA
  const elements: [Metadata, OpenApi.IJsonSchema][] = Object.values(
    props.extra.patternProperties || {},
  );
  if (props.extra.additionalProperties)
    elements.push(props.extra.additionalProperties);

  // SHORT RETURN
  if (elements.length === 0) return undefined;
  else if (elements.length === 1) return elements[0]![1]!;

  // MERGE METADATA AND GENERATE VULNERABLE SCHEMA
  const metadata: Metadata = elements
    .map((tuple) => tuple[0])
    .reduce((x, y) => Metadata.merge(x, y));
  return (
    json_schema_station({
      blockNever: true,
      components: props.components,
      attribute: {},
      metadata,
    }) ?? undefined
  );
};

/**
 * @internal
 */
interface ISuperfluous {
  additionalProperties?: undefined | [Metadata, OpenApi.IJsonSchema];
  patternProperties: Record<string, [Metadata, OpenApi.IJsonSchema]>;
}
