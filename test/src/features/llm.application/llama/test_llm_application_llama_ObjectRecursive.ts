import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_application_llama_ObjectRecursive = _test_llm_application(
  {
    model: "llama",
    name: "ObjectRecursive",
  },
)(typia.llm.application<ObjectRecursiveApplication, "llama">());

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
