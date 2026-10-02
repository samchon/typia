import { TypeGuardError } from "../TypeGuardError";

/**
 * Make the TypeGuardError that functional assertions throw by default.
 *
 * @evidence contracts/common.md#principled-implementation The factory builds a TypeGuardError from the failure properties, which is the default error that functional assertions throw when no custom factory is supplied.
 * @evidence contracts/common.md#clear-and-simple-design One expression, kept as a named function so the emitted code has a stable import.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the constructor.
 * @evidence contracts/common.md#meaningful-documentation A comment states that it is the default factory.
 */
export const _functionalTypeGuardErrorFactory = (p: TypeGuardError.IProps) =>
  new TypeGuardError(p);
