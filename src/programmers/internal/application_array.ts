import { OpenApi, OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { application_plugin } from "./application_plugin";

/**
 * @internal
 */
export const application_array = <Version extends "3.0" | "3.1">(props: {
  generator: (value: Metadata) => Schema<Version>;
  components: Version extends "3.0"
    ? OpenApiV3.IComponents
    : OpenApi.IComponents;
  array: MetadataArray;
}): Array<ArraySchema<Version> | OpenApiV3.IJsonSchema.IReference> => {
  const factory = (): ArraySchema<Version>[] =>
    application_plugin<ArraySchema<Version>>({
      schema: {
        type: "array",
        items: props.generator(props.array.type.value),
      } as ArraySchema<Version>,
      tags: props.array.tags,
    });
  if (props.array.type.recursive === true) {
    const out = () => [{ $ref }];
    const $ref: string = `#/components/schemas/${props.array.type.name}`;
    if (props.components.schemas?.[$ref] !== undefined) return out();

    props.components.schemas ??= {};
    props.components.schemas[$ref] ??= {};

    const oneOf: ArraySchema<Version>[] = factory();
    Object.assign(
      props.components.schemas[$ref]!,
      oneOf.length === 1 ? oneOf[0] : { oneOf },
    );
    return out();
  }
  return factory();
};

/**
 * @internal
 */
type ArraySchema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema.IArray
  : OpenApi.IJsonSchema.IArray;

/**
 * @internal
 */
type Schema<Version extends "3.0" | "3.1"> = Version extends "3.0"
  ? OpenApiV3.IJsonSchema
  : OpenApi.IJsonSchema;
