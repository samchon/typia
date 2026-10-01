import { TypeGuardError } from "../TypeGuardError";

/**
 * Report an assertion failure.
 *
 * When `exceptionable` is true it throws the error that `factory` makes, or a
 * TypeGuardError when `factory` is not a function; otherwise it returns false
 * so a union probe can try the next branch.
 *
 * @evidence contracts/common.md#principled-implementation When the call is exceptionable it throws an error built by the caller's factory if one is a function, and a TypeGuardError otherwise, and when it is not exceptionable it returns false so a union probe can try another branch without throwing. The factory is tested for callability because a pointwise call such as `rows.map(assertUser)` passes the element index in that position, which a bare truthiness test would call.
 * @evidence contracts/common.md#clear-and-simple-design One function with a boolean guard and one factory branch.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A non-callable argument falls back to the default error and is not retried or wrapped; the comment explains that a create-time factory overridden by the argument cannot be recovered here.
 * @evidence contracts/common.md#meaningful-documentation The doc states the two outcomes and the factory rule; the inline comment records the pointwise hand-off failure.
 */
export const _assertGuard = (
  exceptionable: boolean,
  props: TypeGuardError.IProps,
  factory?: (props: TypeGuardError.IProps) => Error,
): false => {
  if (exceptionable === true) {
    // `factory` arrives from the generated function's second parameter, which
    // a pointwise hand-off fills with something that is not a factory at all:
    // `rows.map(assertUser)` passes the element index. A truthiness test then
    // called a number and reported `factory is not a function`, hiding the
    // real assertion failure — and only for indices other than 0. Require a
    // callable, and fall back to TypeGuardError for everything else.
    //
    // A create-time factory is the default of that same parameter, so a
    // non-callable argument has already overridden it by the time this runs
    // and cannot be recovered here. TypeGuardError still names the property
    // that failed, which `factory is not a function` never did.
    if (typeof factory === "function") throw factory(props);
    throw new TypeGuardError(props);
  }
  return false;
};
