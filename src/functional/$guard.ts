import { TypeGuardError } from "../TypeGuardError";

/**
 * @internal
 */
export function $guard(
  method: string,
): (
  factory?: (props: TypeGuardError.IProps) => Error,
) => (
  exceptionable: boolean,
  props: Omit<TypeGuardError.IProps, "method">,
) => boolean;

/**
 * @internal
 */
export function $guard(
  method: string,
): (
  exceptionable: boolean,
  props: Omit<TypeGuardError.IProps, "method">,
) => boolean;

/**
 * @internal
 */
export function $guard(method: string) {
  return (...args: any[]) =>
    args.length === 2
      ? throws(method)((props) => new TypeGuardError(props))(
          ...(args as [boolean, Omit<TypeGuardError.IProps, "method">]),
        )
      : throws(method)(args[0] ?? ((props) => new TypeGuardError(props)));
}

const throws =
  (method: string) =>
  (factory: (props: TypeGuardError.IProps) => Error) =>
  (exceptionable: boolean, props: Omit<TypeGuardError.IProps, "method">) => {
    if (exceptionable === true)
      throw factory!({
        method,
        path: props.path,
        expected: props.expected,
        value: props.value,
      });
    return false;
  };
