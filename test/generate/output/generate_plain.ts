import { tags } from "typia";
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
export const createIs = typia.createIs<ICitizen>();
export const createEquals = typia.createEquals<ICitizen>();
export const createAssert = typia.createAssert<ICitizen>();
export const createAssertEquals = typia.createAssertEquals<ICitizen>();
export const createAssertGuard = typia.createAssertGuard<ICitizen>();
export const createAssertGuardEquals = typia.createAssertGuardEquals<ICitizen>();
export const createValidate = typia.createValidate<ICitizen>();
export const createValidateEquals = typia.createValidateEquals<ICitizen>();
export const createRandom = typia.createRandom<ICitizen>();
