import { ILlmSchema, IValidation } from "@typia/interface";

import { LlmTypeChecker } from "../../validators/LlmTypeChecker";
import { parseLenientJson } from "./parseLenientJson";

/**
 * Coerce LLM arguments by parsing double-stringified JSON values.
 *
 * When LLM produces stringified JSON for non-string schema types, this function
 * attempts to parse them using the lenient JSON parser.
 *
 * Only applies coercion when value is string but schema expects non-string.
 * Type validation is handled separately by `ILlmFunction.validate`.
 *
 * @param value Parsed JSON value (potentially with stringified nested values)
 * @param parameters LLM parameters schema
 * @returns Coerced value with double-stringified JSON parsed
 * @internal
 */
export function coerceLlmArguments(
  value: unknown,
  parameters: ILlmSchema.IParameters,
): unknown {
  return coerceValue(value, parameters, parameters.$defs);
}

function coerceValue(
  value: unknown,
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema> | undefined,
): unknown {
  // Resolve reference
  if (LlmTypeChecker.isReference(schema)) {
    const key: string = schema.$ref.replace("#/$defs/", "");
    const resolved: ILlmSchema | undefined = $defs?.[key];
    if (resolved !== undefined) {
      return coerceValue(value, resolved, $defs);
    }
    return value;
  }

  // Handle anyOf
  if (LlmTypeChecker.isAnyOf(schema)) {
    // Value is string
    if (typeof value === "string") {
      // If string is in union, don't parse - it's valid as-is
      const hasString: boolean = schema.anyOf.some(
        (s: ILlmSchema): boolean =>
          LlmTypeChecker.isString(resolveSchema(s, $defs)),
      );
      if (hasString) {
        return value;
      }
      // String value but no string in union - try to parse
      const parsed: IValidation<unknown> = parseLenientJson(value);
      if (parsed.success) {
        // Recursively coerce the parsed value with matching schema
        for (const subSchema of schema.anyOf) {
          if (matchesSchemaType(parsed.data, subSchema, $defs)) {
            return coerceValue(parsed.data, subSchema, $defs);
          }
        }
        return parsed.data;
      }
      return value;
    }
    // Value is object - find matching object schema and recurse
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      for (const subSchema of schema.anyOf) {
        if (LlmTypeChecker.isObject(resolveSchema(subSchema, $defs))) {
          return coerceValue(value, subSchema, $defs);
        }
      }
    }
    // Value is array - find matching array schema and recurse
    if (Array.isArray(value)) {
      for (const subSchema of schema.anyOf) {
        if (LlmTypeChecker.isArray(resolveSchema(subSchema, $defs))) {
          return coerceValue(value, subSchema, $defs);
        }
      }
    }
    // Non-string primitive or no matching schema - return as-is
    return value;
  }

  // String schema - no coercion needed (value stays as-is)
  if (LlmTypeChecker.isString(schema)) {
    return value;
  }

  // Unknown schema - no coercion needed
  if (LlmTypeChecker.isUnknown(schema)) {
    return value;
  }

  // Value is string but schema is non-string - try to parse
  if (typeof value === "string") {
    const parsed: IValidation<unknown> = parseLenientJson(value);
    if (parsed.success) {
      // Continue coercion on the parsed value (for nested stringified values)
      return coerceValue(parsed.data, schema, $defs);
    }
    // Parse failed, return original - validate will catch type error
    return value;
  }

  // Value is array and schema is array - recurse into items
  if (Array.isArray(value) && LlmTypeChecker.isArray(schema)) {
    return value.map((item: unknown): unknown =>
      coerceValue(item, schema.items, $defs),
    );
  }

  // Value is object and schema is object - recurse into properties
  if (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    LlmTypeChecker.isObject(schema)
  ) {
    return coerceObject(value as Record<string, unknown>, schema, $defs);
  }

  // Everything else (null, boolean, number, integer) - return as-is
  return value;
}

function coerceObject(
  value: Record<string, unknown>,
  schema: ILlmSchema.IObject,
  $defs: Record<string, ILlmSchema> | undefined,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  // Coerce known properties
  for (const [key, propSchema] of Object.entries(schema.properties)) {
    if (key in value) {
      result[key] = coerceValue(value[key], propSchema, $defs);
    }
  }

  // Handle additional properties
  if (schema.additionalProperties !== false) {
    const additionalSchema: ILlmSchema | undefined =
      typeof schema.additionalProperties === "object"
        ? schema.additionalProperties
        : undefined;

    for (const key of Object.keys(value)) {
      if (!(key in schema.properties)) {
        result[key] = additionalSchema
          ? coerceValue(value[key], additionalSchema, $defs)
          : value[key];
      }
    }
  }

  return result;
}

function resolveSchema(
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema> | undefined,
): ILlmSchema {
  if (LlmTypeChecker.isReference(schema)) {
    const key: string = schema.$ref.replace("#/$defs/", "");
    const resolved: ILlmSchema | undefined = $defs?.[key];
    if (resolved !== undefined) {
      return resolveSchema(resolved, $defs);
    }
  }
  return schema;
}

/**
 * Check if value roughly matches the expected schema type. Used for anyOf
 * matching after parsing.
 */
function matchesSchemaType(
  value: unknown,
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema> | undefined,
): boolean {
  if (LlmTypeChecker.isReference(schema)) {
    const key: string = schema.$ref.replace("#/$defs/", "");
    const resolved: ILlmSchema | undefined = $defs?.[key];
    if (resolved) return matchesSchemaType(value, resolved, $defs);
    return false;
  }
  if (LlmTypeChecker.isNull(schema)) return value === null;
  if (LlmTypeChecker.isBoolean(schema)) return typeof value === "boolean";
  if (LlmTypeChecker.isInteger(schema))
    return typeof value === "number" && Number.isInteger(value);
  if (LlmTypeChecker.isNumber(schema)) return typeof value === "number";
  if (LlmTypeChecker.isString(schema)) return typeof value === "string";
  if (LlmTypeChecker.isArray(schema)) return Array.isArray(value);
  if (LlmTypeChecker.isObject(schema))
    return typeof value === "object" && value !== null && !Array.isArray(value);
  if (LlmTypeChecker.isUnknown(schema)) return true;
  if (LlmTypeChecker.isAnyOf(schema))
    return schema.anyOf.some((s) => matchesSchemaType(value, s, $defs));
  return false;
}
