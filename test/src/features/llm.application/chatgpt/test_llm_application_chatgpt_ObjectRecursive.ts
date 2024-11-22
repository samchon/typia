import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_application_chatgpt_ObjectRecursive =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectRecursive",
  })(typia.llm.application<ObjectRecursiveApplication, "chatgpt">());

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
