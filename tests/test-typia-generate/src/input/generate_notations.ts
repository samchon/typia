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

export const createCamel = typia.notations.createCamel<ICitizen>();
export const createAssertCamel = typia.notations.createAssertCamel<ICitizen>();
export const createIsCamel = typia.notations.createIsCamel<ICitizen>();
export const createValidateCamel =
  typia.notations.createValidateCamel<ICitizen>();

export const createPascal = typia.notations.createPascal<ICitizen>();
export const createAssertPascal =
  typia.notations.createAssertPascal<ICitizen>();
export const createIsPascal = typia.notations.createIsPascal<ICitizen>();
export const createValidatePascal =
  typia.notations.createValidatePascal<ICitizen>();

export const createSnake = typia.notations.createSnake<ICitizen>();
export const createAssertSnake = typia.notations.createAssertSnake<ICitizen>();
export const createIsSnake = typia.notations.createIsSnake<ICitizen>();
export const createValidateSnake =
  typia.notations.createValidateSnake<ICitizen>();

export const createKebab = typia.notations.createKebab<ICitizen>();
export const createAssertKebab = typia.notations.createAssertKebab<ICitizen>();
export const createIsKebab = typia.notations.createIsKebab<ICitizen>();
export const createValidateKebab =
  typia.notations.createValidateKebab<ICitizen>();

interface IKebabSource {
  userId: string;
  user_name: string;
  _privateValue: number;
  XMLParser: boolean;
  nested: { innerValue: string };
}
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
const kebabKeyAssertion: Equal<
  keyof typia.KebabCase<IKebabSource>,
  "user-id" | "user-name" | "_private-value" | "xmlparser" | "nested"
> = true;
const kebabNestedKeyAssertion: Equal<
  keyof typia.KebabCase<IKebabSource>["nested"],
  "inner-value"
> = true;
void kebabKeyAssertion;
void kebabNestedKeyAssertion;
