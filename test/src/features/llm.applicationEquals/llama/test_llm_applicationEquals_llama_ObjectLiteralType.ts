import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_llm_applicationEquals_llama_ObjectLiteralType = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectLiteralType",
    factory: ObjectLiteralType,
  })(
    typia.llm.application<
      ObjectLiteralTypeApplication,
      "llama",
      { equals: true }
    >(),
  );

interface ObjectLiteralTypeApplication {
  insert(p: { first: ObjectLiteralType }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralType;
    second: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType>;
  coalesce(p: {
    first: ObjectLiteralType | null;
    second: ObjectLiteralType | null;
    third?: ObjectLiteralType | null;
  }): Promise<ObjectLiteralType | null>;
}
