import { TypeGuardError } from "../TypeGuardError";

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
    if (typeof factory === "function") throw factory(props);
    throw new TypeGuardError(props);
  }
  return false;
};
