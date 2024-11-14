// import typia, { tags } from "typia";

// interface ICitizen {
//   id: string & tags.Format<"uuid">;
//   name: string & tags.Pattern<"^[A-Z][a-z]+$">;
//   email: string & tags.Format<"email">;
//   age: number & tags.Type<"uint32"> & tags.ExclusiveMaximum<100>;
//   motto: string;
//   birthdate: Date;
//   died_at: null | Date;
//   parent: ICitizen | null;
//   children: ICitizen[];
// }

// export const createClone = typia.misc.createClone<ICitizen>();
// export const createAssertClone = typia.misc.createAssertClone<ICitizen>();
// export const createIsClone = typia.misc.createIsClone<ICitizen>();
// export const createValidateClone = typia.misc.createValidateClone<ICitizen>();

// export const createPrune = typia.misc.createPrune<ICitizen>();
// export const createAssertPrune = typia.misc.createAssertPrune<ICitizen>();
// export const createIsPrune = typia.misc.createIsPrune<ICitizen>();
// export const createValidatePrune = typia.misc.createValidatePrune<ICitizen>();

// export const literals = typia.misc.literals<false | 1 | "two">();
