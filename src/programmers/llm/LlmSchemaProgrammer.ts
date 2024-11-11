import { ILlmSchema } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IJsonApplication } from "../../module";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";

export namespace LlmSchemaProgrammer {
  export const validate = (meta: Metadata): string[] => {
    const output: string[] = [];
    if (
      meta.atomics.some((a) => a.type === "bigint") ||
      meta.constants.some((c) => c.type === "bigint")
    )
      output.push("LLM schema does not support bigint type.");
    if (
      meta.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      meta.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("LLM schema does not support undefined type in array.");
    if (meta.maps.length) output.push("LLM schema does not support Map type.");
    if (meta.sets.length) output.push("LLM schema does not support Set type.");
    for (const native of meta.natives)
      if (
        AtomicPredicator.native(native) === false &&
        native !== "Date" &&
        native !== "Blob" &&
        native !== "File"
      )
        output.push(`LLM schema does not support ${native} type.`);
    // if (
    //   meta.aliases.some((a) => a.recursive) ||
    //   meta.arrays.some((a) => a.type.recursive) ||
    //   meta.objects.some((o) => o.recursive) ||
    //   meta.tuples.some((t) => t.type.recursive)
    // )
    //   output.push("LLM schema does not support recursive type.");
    return output;
  };

  export const write = (metadata: Metadata): ILlmSchema => {
    const app: IJsonApplication<"3.1"> = JsonApplicationProgrammer.write<"3.1">(
      "3.1",
    )([metadata]) as IJsonApplication<"3.1">;
    const schema: ILlmSchema | null | null = HttpLlmConverter.schema({
      components: app.components,
      schema: app.schemas[0]!,
      recursive: 3,
    });
    if (schema === null)
      throw new Error("Failed to convert JSON schema to LLM schema.");
    return schema;
  };
}
