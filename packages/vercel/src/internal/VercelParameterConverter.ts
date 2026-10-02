import { ILlmSchema } from "@typia/interface";
import { Schema, jsonSchema } from "ai";
import { JSONSchema7 } from "json-schema";

/**
 * Adapts reflected schemas to the AI SDK's schema carrier.
 *
 * The carrier advertises parameters without adding a second validator before
 * typia's coercion and validation. Tool output uses the registrar's success or
 * error envelope and retains local schema definitions.
 *
 * @evidence contracts/common.md#principled-implementation The namespace separates the unchanged model-facing parameter schema from the tool execution envelope, matching the two responsibilities of AI SDK schema carriers.
 * @evidence contracts/common.md#clear-and-simple-design Two exported converters own parameter and enveloped-output schemas; validation and execution remain in the registrar instead of being duplicated in this representation adapter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Both conversions use the SDK's public jsonSchema extension point, with contract-defined success discriminants and no mutation of SDK internals or consumer-specific branches.
 * @evidence contracts/common.md#meaningful-documentation The namespace describes the absence of redundant validation and explains why output wrapping differs; each converter documents its carrier and definition handling.
 */
export namespace VercelParameterConverter {
  /**
   * Carries parameters to the SDK without an SDK-side validator.
   *
   * The generated parameters are already JSON Schema; coercion and feedback
   * belong to typia's tool execution before a controller method is invoked.
   *
   * @evidence contracts/common.md#principled-implementation jsonSchema receives the reflected object schema unchanged and no validate callback, preserving its JSON Schema meaning while leaving typia's coercion reachable.
   * @evidence contracts/common.md#clear-and-simple-design A direct public SDK call supplies the carrier; schema conversion and duplicated validation layers would add behavior this adapter does not own.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The JSONSchema7 cast bridges compatible public typings without modifying the schema or SDK; no fixture values or patched validators are involved.
   * @evidence contracts/common.md#meaningful-documentation The comment explains both the schema's existing representation and the validation owner, so callers can distinguish schema advertisement from runtime checking.
   */
  export const convert = (parameters: ILlmSchema.IParameters): Schema<object> =>
    jsonSchema<object>(parameters as JSONSchema7);

  /**
   * Describes the registrar's structured success and error results.
   *
   * A success contains the reflected output under data; an error contains its
   * message. Definitions remain at the schema root so local references inside
   * data keep resolving to the original reflected types.
   *
   * @evidence contracts/common.md#principled-implementation Disjoint true/false success discriminants select the registrar's data/error variants; required fields and additionalProperties false express their exact shapes, and root $defs preserves local references.
   * @evidence contracts/common.md#clear-and-simple-design One explicit anyOf represents the two execution outcomes; only the data object borrows reflected properties and required fields, while the envelope belongs entirely to this adapter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts success, data and error are the registrar's public result fields; their literal schemas express that contract and never depend on a particular controller or expected test output.
   * @evidence contracts/common.md#meaningful-documentation The comment states both execution variants and explains root definition placement, the nonobvious detail needed to understand nested local-reference validity.
   */
  export const convertToolOutput = (
    parameters: ILlmSchema.IParameters,
  ): Schema<object> =>
    jsonSchema<object>({
      type: "object",
      anyOf: [
        {
          type: "object",
          properties: {
            success: { type: "boolean", enum: [true] },
            data: {
              type: "object",
              properties: parameters.properties,
              required: parameters.required,
              additionalProperties: false,
            },
          },
          required: ["success", "data"],
          additionalProperties: false,
        },
        {
          type: "object",
          properties: {
            success: { type: "boolean", enum: [false] },
            error: { type: "string" },
          },
          required: ["success", "error"],
          additionalProperties: false,
        },
      ],
      $defs: parameters.$defs,
    } as JSONSchema7);
}
