import type { IValidation } from "typia";

export function assertValidationSuccess<T>(
  valid: IValidation<T>,
): asserts valid is IValidation.ISuccess<T> {
  if (valid.success !== true || !Array.isArray(valid.errors))
    throw new Error("Invalid IValidation success result.");
  if (valid.errors.length !== 0)
    throw new Error("Invalid IValidation success errors.");
}

export function assertValidationFailure<T>(
  valid: IValidation<T>,
): asserts valid is IValidation.IFailure {
  if (valid.success !== false || !Array.isArray(valid.errors))
    throw new Error("Invalid IValidation failure result.");
  for (const error of valid.errors)
    if (
      typeof error !== "object" ||
      error === null ||
      typeof error.path !== "string" ||
      typeof error.expected !== "string"
    )
      throw new Error("Invalid IValidation error entry.");
}

export function assertStandardSchemaIssueResult(
  valid: unknown,
): asserts valid is {
  issues: Array<{ message: string; path?: PropertyKey[] }>;
} {
  if (
    typeof valid !== "object" ||
    valid === null ||
    !("issues" in valid) ||
    !Array.isArray((valid as { issues?: unknown }).issues)
  )
    throw new Error("Invalid Standard Schema failure result.");
  for (const issue of (valid as { issues: unknown[] }).issues)
    if (
      typeof issue !== "object" ||
      issue === null ||
      typeof (issue as { message?: unknown }).message !== "string"
    )
      throw new Error("Invalid Standard Schema issue entry.");
}
