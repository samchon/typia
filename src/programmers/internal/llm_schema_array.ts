import { ILlmSchema } from "@samchon/openapi";

import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { application_plugin } from "./application_plugin";
import { llm_schema_station } from "./llm_schema_station";

/**
 * @internal
 */
export const llm_schema_array = (array: MetadataArray): ILlmSchema.IArray[] =>
  application_plugin(
    {
      type: "array",
      items: llm_schema_station({
        metadata: array.type.value,
        blockNever: false,
        attribute: {},
      }),
    },
    array.tags,
  );
