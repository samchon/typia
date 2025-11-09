import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectLiteralType = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectLiteralType",
    factory: ObjectLiteralType
  })(
    typia.llm.application<ObjectLiteralTypeApplication, "chatgpt">(),
  );

interface ObjectLiteralTypeApplication {
  insert(p: { first: ObjectLiteralType }): Promise<void>;
  reduce(p: { first: ObjectLiteralType, second: ObjectLiteralType | null }): Promise<ObjectLiteralType>;
  coalesce(p: {
    first: ObjectLiteralType | null,
    second: ObjectLiteralType | null,
    third?: ObjectLiteralType | null,
  }): Promise<ObjectLiteralType | null>;
}