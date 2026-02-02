import { TypeGuardError } from "../TypeGuardError";

export const _functionalTypeGuardErrorFactory = (p: TypeGuardError.IProps) =>
  new TypeGuardError(p);
