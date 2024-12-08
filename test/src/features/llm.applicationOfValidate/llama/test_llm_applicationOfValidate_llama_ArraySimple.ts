import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_applicationOfValidate_llama_ArraySimple =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ArraySimple",
    factory: ArraySimple,
  })(typia.llm.applicationOfValidate<ArraySimpleApplication, "llama">());

interface ArraySimpleApplication {
  insert(p: { first: ArraySimple }): Promise<void>;
  reduce(p: {
    first: ArraySimple;
    second: ArraySimple | null;
  }): Promise<ArraySimple>;
  coalesce(p: {
    first: ArraySimple | null;
    second: ArraySimple | null;
    third?: ArraySimple | null;
  }): Promise<ArraySimple | null>;
}
