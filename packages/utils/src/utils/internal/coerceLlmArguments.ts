import { IJsonParseResult, ILlmSchema } from "@typia/interface";

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
export function coerceLlmArguments<T = unknown>(
  value: unknown,
  parameters: ILlmSchema.IParameters,
): T {
  return coerceValue(value, parameters, parameters.$defs) as T;
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
      const hasString: boolean = schema.anyOf.some((s: ILlmSchema): boolean =>
        LlmTypeChecker.isString(resolveSchema(s, $defs)),
      );
      if (hasString) {
        return value;
      }
      // String value but no string in union - try to parse
      const parsed: IJsonParseResult<unknown> = parseLenientJson(value);
      if (parsed.success) {
        // Find uniquely matching schema via type + x-discriminator
        const matched: ILlmSchema | undefined = findMatchingAnyOfSchema(
          parsed.data,
          schema,
          $defs,
        );
        if (matched !== undefined) {
          return coerceValue(parsed.data, matched, $defs);
        }
        return parsed.data;
      }
      return value;
    }
    // Value is object - find matching schema via discriminated union
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const matched: ILlmSchema | undefined = findMatchingObjectInAnyOf(
        value as Record<string, unknown>,
        schema,
        $defs,
      );
      if (matched !== undefined) {
        return coerceValue(value, matched, $defs);
      }
      return value;
    }
    // Value is array - find matching array schema (only if unambiguous)
    if (Array.isArray(value)) {
      const arraySchemas: ILlmSchema[] = schema.anyOf.filter(
        (s: ILlmSchema): boolean =>
          LlmTypeChecker.isArray(resolveSchema(s, $defs)),
      );
      if (arraySchemas.length === 1) {
        return coerceValue(value, arraySchemas[0]!, $defs);
      }
      // Multiple or no array schemas - skip coercion
      return value;
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
    const parsed: IJsonParseResult<unknown> = parseLenientJson(value);
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

  // Preserve additional properties - let validation handle rejection
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

/**
 * Find the uniquely matching schema for a value among anyOf alternatives. Uses
 * `x-discriminator` for object disambiguation. Returns undefined if no unique
 * match can be determined.
 */
function findMatchingAnyOfSchema(
  value: unknown,
  schema: ILlmSchema.IAnyOf,
  $defs: Record<string, ILlmSchema> | undefined,
): ILlmSchema | undefined {
  const matching: ILlmSchema[] = schema.anyOf.filter((s: ILlmSchema): boolean =>
    matchesSchemaType(value, s, $defs),
  );
  if (matching.length === 1) return matching[0];
  if (matching.length === 0) return undefined;
  // Multiple type matches - try x-discriminator for objects
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return findMatchingObjectInAnyOf(
      value as Record<string, unknown>,
      schema,
      $defs,
    );
  }
  return undefined;
}

/**
 * Find the matching object schema among anyOf using `x-discriminator`. If only
 * one object schema exists, returns it directly. If multiple exist but no
 * x-discriminator, gives up.
 */
function findMatchingObjectInAnyOf(
  value: Record<string, unknown>,
  schema: ILlmSchema.IAnyOf,
  $defs: Record<string, ILlmSchema> | undefined,
): ILlmSchema | undefined {
  const objectSchemas: ILlmSchema[] = schema.anyOf.filter(
    (s: ILlmSchema): boolean =>
      LlmTypeChecker.isObject(resolveSchema(s, $defs)),
  );
  if (objectSchemas.length === 0) return undefined;
  if (objectSchemas.length === 1) return objectSchemas[0];

  // Multiple object schemas - require x-discriminator
  const discriminator: ILlmSchema.IAnyOf.IDiscriminator | undefined =
    schema["x-discriminator"];
  if (discriminator === undefined) return undefined;

  const key: string = discriminator.propertyName;
  const discriminatorValue: unknown = value[key];

  // Use mapping for direct $ref lookup
  if (
    discriminator.mapping !== undefined &&
    typeof discriminatorValue === "string"
  ) {
    const ref: string | undefined = discriminator.mapping[discriminatorValue];
    if (ref !== undefined) {
      for (const s of schema.anyOf) {
        if (LlmTypeChecker.isReference(s) && s.$ref === ref) {
          return s;
        }
      }
    }
    return undefined;
  }

  // No mapping - match by enum values on the discriminator property
  for (const s of objectSchemas) {
    const resolved: ILlmSchema = resolveSchema(s, $defs);
    if (!LlmTypeChecker.isObject(resolved)) continue;
    const propSchema: ILlmSchema | undefined = resolved.properties?.[key];
    if (propSchema === undefined) continue;
    const resolvedProp: ILlmSchema = resolveSchema(propSchema, $defs);
    if (
      LlmTypeChecker.isString(resolvedProp) &&
      resolvedProp.enum?.includes(discriminatorValue as string)
    ) {
      return s;
    }
  }

  return undefined;
}
