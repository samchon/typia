import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_llm_application_chatgpt_ObjectRecursive =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectRecursive",
    factory: ObjectRecursive,
  })(
    typia.llm.application<
      ObjectRecursiveApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

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
