import { TypeGuardError } from "../TypeGuardError";

export const $functionalTypeGuardErrorFactory = (p: TypeGuardError.IProps) =>
  new TypeGuardError(p);
