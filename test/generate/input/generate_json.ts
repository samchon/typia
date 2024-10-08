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

export const createStringify = typia.json.createStringify<ICitizen>();
export const createIsStringify = typia.json.createIsStringify<ICitizen>();
export const createAssertStringify =
  typia.json.createAssertStringify<ICitizen>();
export const createValidateStringify =
  typia.json.createValidateStringify<ICitizen>();

export const createIsParse = typia.json.createIsParse<ICitizen>();
export const createAssertParse = typia.json.createAssertParse<ICitizen>();
export const createValidateParse = typia.json.createValidateParse<ICitizen>();
