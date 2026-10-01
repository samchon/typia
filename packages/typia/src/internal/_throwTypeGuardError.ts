import { TypeGuardError } from "../TypeGuardError";

/**
 * Throw a TypeGuardError built from the failure properties; this is the default
 * thrower of emitted assertions.
 *
 * @evidence contracts/common.md#principled-implementation The function throws a TypeGuardError built from the failure properties, which is the default thrower that emitted assertions call.
 * @evidence contracts/common.md#clear-and-simple-design One statement, a named function so emitted code has a stable import.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no behavior beyond the constructor.
 * @evidence contracts/common.md#meaningful-documentation A comment states that it always throws.
 */
export const _throwTypeGuardError = (props: TypeGuardError.IProps) => {
  throw new TypeGuardError(props);
};
