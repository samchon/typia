import { StandardJSONSchemaV1 } from "@standard-schema/spec";
import { IHttpLlmFunction, ILlmFunction } from "@typia/interface";

/**
 * A Standard JSON Schema view of one typia function's parameters.
 *
 * LangChain's tool `schema` fills two roles at once: `toJsonSchema(tool.schema)`
 * turns it into the parameters the model is shown, and `StructuredTool.call`
 * validates incoming arguments against it before the tool body runs. Handing
 * over a bare `ILlmSchema.IParameters` fills the first role but forfeits the
 * second — LangChain validates it with `@cfworker/json-schema`, which rejects
 * what typia would have coerced and reports the failure in its own words, so
 * typia's coercion and its correctable feedback both become unreachable.
 *
 * Standard JSON Schema separates the two roles. It carries a model-facing schema
 * under `~standard.jsonSchema` and, by declaring no `~standard.validate`, no
 * validator — which is exactly typia's position: show the model this schema, and
 * leave validation to `LlmJson.validateArguments` in the tool body. LangChain
 * reads the schema back through its own `toJsonSchema`, so the model sees the
 * same parameters document as before, byte for byte.
 *
 * `@typia/vercel` states the same contract to the AI SDK through `jsonSchema()`,
 * whose `validate` is likewise left undefined so that `safeValidateTypes`
 * short-circuits its own validation.
 *
 * Two version floors hold this together, and both are pinned in the package
 * manifest. `toJsonSchema` only reads `~standard.jsonSchema` from
 * `@langchain/core@1.1.30` onwards — older versions return the wrapper itself and
 * would advertise *that* to the model in place of the parameters — and
 * `StandardJSONSchemaV1` only exists from `@standard-schema/spec@1.1.0`.
 *
 * @see https://github.com/standard-schema/standard-schema
 */
export namespace LangChainParameterConverter {
  export const convert = (
    func: ILlmFunction | IHttpLlmFunction,
  ): StandardJSONSchemaV1 => {
    // Coercion never changes the shape a value must end up in, so the input and
    // output schemas are the same document.
    const jsonSchema = (): Record<string, unknown> =>
      func.parameters as unknown as Record<string, unknown>;
    return {
      "~standard": {
        version: 1,
        vendor: "typia",
        jsonSchema: {
          input: jsonSchema,
          output: jsonSchema,
        },
      },
    };
  };
}
