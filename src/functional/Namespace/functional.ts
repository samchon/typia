import { TypeGuardError } from "../../TypeGuardError";

export const functionalAssert = () => ({
  errorFactory: (p: TypeGuardError.IProps) => new TypeGuardError(p),
});
