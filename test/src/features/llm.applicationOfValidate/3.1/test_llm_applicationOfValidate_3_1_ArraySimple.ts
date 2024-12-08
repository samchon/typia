import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_applicationOfValidate_3_1_ArraySimple =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ArraySimple",
    factory: ArraySimple,
  })(typia.llm.applicationOfValidate<ArraySimpleApplication, "3.1">());

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
