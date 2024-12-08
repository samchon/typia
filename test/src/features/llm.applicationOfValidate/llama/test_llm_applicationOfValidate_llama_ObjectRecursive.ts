import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_applicationOfValidate_llama_ObjectRecursive =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ObjectRecursive",
    factory: ObjectRecursive,
  })(typia.llm.applicationOfValidate<ObjectRecursiveApplication, "llama">());

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
