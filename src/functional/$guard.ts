import { TypeGuardError } from "../TypeGuardError";

/**
 * @internal
 */
export const $guard =
    (method: string) => (props: Omit<TypeGuardError.IProps, "method">) =>
        new TypeGuardError({
            method,
            path: props.path,
            expected: props.expected,
            value: props.value,
        });
