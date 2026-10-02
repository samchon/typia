import { StandardJSONSchemaV1 } from "@standard-schema/spec";
import { IHttpLlmFunction, ILlmFunction } from "@typia/interface";

/**
 * A Standard JSON Schema view of one typia function's parameters.
 *
 * LangChain's tool `schema` fills two roles at once:
 * `toJsonSchema(tool.schema)` turns it into the parameters the model is shown,
 * and `StructuredTool.call` validates incoming arguments against it before the
 * tool body runs. Handing over a bare `ILlmSchema.IParameters` fills the first
 * role but forfeits the second — LangChain validates it with
 * `@cfworker/json-schema`, which rejects what typia would have coerced and
 * reports the failure in its own words, so typia's coercion and its correctable
 * feedback both become unreachable.
 *
 * Standard JSON Schema separates the two roles. It carries a model-facing
 * schema under `~standard.jsonSchema` and, by declaring no
 * `~standard.validate`, no Standard Schema validator. LangChain's JSON Schema
 * precheck sees the carrier rather than its nested parameter constraints, so
 * parameter validation stays with `LlmJson.validateArguments` in the tool body.
 * LangChain reads the model-facing schema back through its own `toJsonSchema`,
 * so the model sees the same parameters document as before, byte for byte.
 *
 * `@typia/vercel` states the same contract to the AI SDK through
 * `jsonSchema()`, whose `validate` is likewise left undefined so that
 * `safeValidateTypes` short-circuits its own validation.
 *
 * Two version floors hold this together, and both are pinned in the package
 * manifest. `toJsonSchema` only reads `~standard.jsonSchema` from
 * `@langchain/core@1.1.30` onwards — older versions return the wrapper itself
 * and would advertise _that_ to the model in place of the parameters — and
 * `StandardJSONSchemaV1` only exists from `@standard-schema/spec@1.1.0`.
 *
 * @evidence contracts/common.md#principled-implementation The public Standard JSON Schema carrier exposes the reflected parameters through input/output callbacks while carrying no top-level parameter constraints or Standard Schema validator; the SDK precheck therefore leaves parameter coercion and correctable failures to LlmJson.
 * @evidence contracts/common.md#clear-and-simple-design One converter owns the framework schema carrier, with the unchanged schema callback shared by both directions; execution validation stays in the registrar.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The adapter uses the documented Standard JSON Schema extension and supported dependency floors instead of replacing LangChain internals or accepting raw data through a patched validator.
 * @evidence contracts/common.md#meaningful-documentation The namespace explains the two schema roles, the validation trap avoided through the public extension, the Vercel equivalent and both required dependency floors with their consequences.
 *
 * @see https://github.com/standard-schema/standard-schema
 */
export namespace LangChainParameterConverter {
  /**
   * Returns a schema-only Standard JSON Schema carrier for one function.
   *
   * Input and output advertise the same required final argument shape; the
   * registrar owns coercion, so the carrier deliberately has no Standard Schema
   * validator and carries no top-level JSON Schema constraints.
   *
   * @evidence contracts/common.md#principled-implementation Both JSON Schema callbacks return func.parameters because coercion changes values rather than the required final shape; a carrier without top-level parameter constraints or a Standard Schema validator preserves the registrar's argument handling.
   * @evidence contracts/common.md#clear-and-simple-design One shared callback and one standard carrier express the two equivalent schema directions without duplicating schema conversion or runtime checking.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The returned version/vendor/jsonSchema fields implement Standard JSON Schema through its public contract; the function does not mutate LangChain or specialize known methods.
   * @evidence contracts/common.md#meaningful-documentation The function comment explains shape equivalence and the validation owner, while the namespace supplies the framework semantics and supported-version rationale.
   */
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
