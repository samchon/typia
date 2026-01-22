import typia, { tags } from "typia";

interface ICitizen {
  id: string & tags.Format<"uuid">;
  name: string & tags.Pattern<"^[A-Z][a-z]+$">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.ExclusiveMaximum<100>;
  motto: string;
  birthdate: Date;
  died_at: null | Date;
  parent: ICitizen | null;
  children: ICitizen[];
}

export const is = typia.createIs<ICitizen>();
export const assert = typia.createAssert<ICitizen>();
export const assertGuard = typia.createAssertGuard<ICitizen>();
export const validate = typia.createValidate<ICitizen>();

export const equals = typia.createEquals<ICitizen>();
export const assertEquals = typia.createAssertEquals<ICitizen>();
export const assertGuardEquals = typia.createAssertGuardEquals<ICitizen>();
export const validateEquals = typia.createValidateEquals<ICitizen>();

export const random = typia.createRandom<ICitizen>();
