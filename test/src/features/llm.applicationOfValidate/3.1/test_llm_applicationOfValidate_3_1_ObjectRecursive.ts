import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_applicationOfValidate_3_1_ObjectRecursive =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectRecursive",
    factory: ObjectRecursive,
  })(typia.llm.applicationOfValidate<ObjectRecursiveApplication, "3.1">());

interface ObjectRecursiveApplication {
  insert(p: { first: ObjectRecursive }): Promise<void>;
  reduce(p: {
    first: ObjectRecursive;
    second: ObjectRecursive | null;
  }): Promise<ObjectRecursive>;
  coalesce(p: {
    first: ObjectRecursive | null;
    second: ObjectRecursive | null;
    third?: ObjectRecursive | null;
  }): Promise<ObjectRecursive | null>;
}
