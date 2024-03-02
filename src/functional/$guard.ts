import { TypeGuardError } from "../TypeGuardError";

/**
 * @internal
 */
export const $guard =
  (method: string) =>
  (
    exceptionable: boolean,
    props: Omit<TypeGuardError.IProps, "method">,
    factory?: (props: TypeGuardError.IProps) => Error,
  ): boolean => {
    if (exceptionable === true)
      throw (factory ?? ((props) => new TypeGuardError(props)))({
        method,
        path: props.path,
        expected: props.expected,
        value: props.value,
      });
    return false;
  };
