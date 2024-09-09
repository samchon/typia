import { ILlmSchema } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { llm_schema_station } from "./llm_schema_station";

/**
 * @internal
 */
export const llm_schema_tuple = (props: {
  tuple: MetadataTuple;
  attribute: ILlmSchema.__IAttribute;
}): ILlmSchema.IArray => ({
  ...props.attribute,
  type: "array",
  items: llm_schema_station({
    blockNever: false,
    attribute: props.attribute,
    metadata: props.tuple.type.elements.reduce(
      (x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y),
      Metadata.initialize(),
    ),
  }),
  minItems: !!props.tuple.type.elements.at(-1)?.rest
    ? props.tuple.type.elements.length - 1
    : props.tuple.type.elements.filter((x) => !x.optional).length,
  maxItems: !!props.tuple.type.elements.at(-1)?.rest
    ? undefined!
    : props.tuple.type.elements.length,
});
