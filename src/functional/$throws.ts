import { TypeGuardError } from "../TypeGuardError";

export const $throws =
  (method: string) =>
  (props: Pick<TypeGuardError.IProps, "expected" | "value">) => {
    throw new TypeGuardError({
      ...props,
      method: `typia.${method}`,
    });
  };
