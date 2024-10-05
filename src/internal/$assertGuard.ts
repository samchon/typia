import { TypeGuardError } from "../TypeGuardError";

export const $assertGuard =
  (method: string) =>
  (
    exceptionable: boolean,
    props: Omit<TypeGuardError.IProps, "method">,
    factory?: (props: TypeGuardError.IProps) => Error,
  ): false => {
    if (exceptionable === true) {
      const next: TypeGuardError.IProps = {
        method,
        ...props,
      };
      if (factory) throw factory(next);
      else throw new TypeGuardError(next);
    }
    return false;
  };
