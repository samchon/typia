import { ILlmSchema } from "@samchon/openapi";

import { CommentFactory } from "../../factories/CommentFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { PatternUtil } from "../../utils/PatternUtil";

import { application_description } from "./application_description";
import { llm_schema_station } from "./llm_schema_station";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const llm_schema_object = (props: {
  object: MetadataObject;
  nullable: boolean;
}): ILlmSchema.IObject => {
  // ITERATE PROPERTIES
  const properties: Record<string, any> = {};
  const extraMeta: ISuperfluous = {
    patternProperties: {},
    additionalProperties: undefined,
  };
  const required: string[] = [];

  for (const property of props.object.properties) {
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
    const schema: ILlmSchema | null = llm_schema_station({
      blockNever: true,
      attribute: {
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
      },
      metadata: property.value,
    });

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
    nullable: props.nullable,
    required: required.length ? required : undefined,
    title: (() => {
      const info: IJsDocTagInfo | undefined = props.object.jsDocTags.find(
        (tag) => tag.name === "title",
      );
      return info?.text?.length ? CommentFactory.merge(info.text) : undefined;
    })(),
    description: application_description(props.object),
    additionalProperties: join(extraMeta),
  };
};

/**
 * @internal
 */
const join = (extra: ISuperfluous): ILlmSchema | undefined => {
  // LIST UP METADATA
  const elements: [Metadata, ILlmSchema][] = Object.values(
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
  return llm_schema_station({
    blockNever: true,
    attribute: {},
    metadata: meta,
  });
};

/**
 * @internal
 */
interface ISuperfluous {
  additionalProperties?: undefined | [Metadata, ILlmSchema];
  patternProperties: Record<string, [Metadata, ILlmSchema]>;
}
