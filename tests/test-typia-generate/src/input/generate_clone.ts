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

export const createClone = typia.plain.createClone<ICitizen>();
export const createAssertClone = typia.plain.createAssertClone<ICitizen>();
export const createIsClone = typia.plain.createIsClone<ICitizen>();
export const createValidateClone = typia.plain.createValidateClone<ICitizen>();

export const createPrune = typia.plain.createPrune<ICitizen>();
export const createAssertPrune = typia.plain.createAssertPrune<ICitizen>();
export const createIsPrune = typia.plain.createIsPrune<ICitizen>();
export const createValidatePrune = typia.plain.createValidatePrune<ICitizen>();

export const literals = typia.reflect.literals<false | 1 | "two">();
