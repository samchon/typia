import { TypeGuardError } from "../TypeGuardError";

export const _throwTypeGuardError = (props: TypeGuardError.IProps) => {
  throw new TypeGuardError(props);
};
