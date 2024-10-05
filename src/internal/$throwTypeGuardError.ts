import { TypeGuardError } from "../TypeGuardError";

export const $throwTypeGuardError = (props: TypeGuardError.IProps) => {
  throw new TypeGuardError(props);
};
