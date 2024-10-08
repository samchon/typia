import { TypeGuardError } from "../TypeGuardError";

export const $assertGuard = (
  exceptionable: boolean,
  props: TypeGuardError.IProps,
  factory?: (props: TypeGuardError.IProps) => Error,
): false => {
  if (exceptionable === true) {
    if (factory) throw factory(props);
    else throw new TypeGuardError(props);
  }
  return false;
};
