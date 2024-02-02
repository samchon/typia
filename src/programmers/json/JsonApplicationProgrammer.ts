import { IJsonApplication } from "../../schemas/json/IJsonApplication";
import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { Metadata } from "../../schemas/metadata/Metadata";

import { TransformerError } from "../../transformers/TransformerError";
import { AtomicPredicator } from "../helpers/AtomicPredicator";

import { application_schema } from "../internal/application_schema";

export namespace JsonApplicationProgrammer {
  export interface IOptions {
    purpose: "ajv" | "swagger";
    surplus: boolean;
  }

  /**
   * @internal
   */
  export namespace IOptions {
    export const complement = (options?: Partial<IOptions>): IOptions => ({
      purpose: options?.purpose ?? "swagger",
      surplus: options?.surplus ?? false,
    });
  }

  export const write =
    (options?: Partial<IOptions>) =>
    (metadatas: Array<Metadata>): IJsonApplication => {
      const fullOptions: IOptions = IOptions.complement(options);
      const components: IJsonComponents = {
        schemas: {},
      };
      const generator = application_schema(fullOptions)(true)(components);
      return {
        schemas: metadatas.map((meta, i) => {
          const schema: IJsonSchema | null = generator(meta)({});
          if (schema === null)
            throw new TransformerError({
              code: "typia.json.application",
              message: `invalid type on argument - (${meta.getName()}, ${i})`,
            });
          return schema;
        }),
        components,
        ...fullOptions,
      };
    };

  export const validate = (meta: Metadata) => {
    const output: string[] = [];
    if (
      meta.atomics.some((a) => a.type === "bigint") ||
      meta.constants.some((c) => c.type === "bigint")
    )
      output.push("JSON schema does not support bigint type.");
    if (
      meta.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      meta.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("JSON schema does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON schema does not support Map type.");
    if (meta.sets.length) output.push("JSON schema does not support Set type.");
    for (const native of meta.natives)
      if (
        AtomicPredicator.native(native) === false &&
        native !== "Date" &&
        native !== "Blob" &&
        native !== "File"
      )
        output.push(`JSON schema does not support ${native} type.`);
    return output;
  };
}
