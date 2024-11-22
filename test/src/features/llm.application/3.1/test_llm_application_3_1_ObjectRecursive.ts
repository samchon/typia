import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_application_3_1_ObjectRecursive = _test_llm_application({
  model: "3.1",
  name: "ObjectRecursive",
})(typia.llm.application<ObjectRecursiveApplication, "3.1">());

interface ObjectRecursiveApplication {
  insert(first: ObjectRecursive): Promise<void>;
  reduce(
    first: ObjectRecursive,
    second: ObjectRecursive | null,
  ): Promise<ObjectRecursive>;
  coalesce(
    first: ObjectRecursive | null,
    second: ObjectRecursive | null,
    third?: ObjectRecursive | null,
  ): Promise<ObjectRecursive | null>;
}
