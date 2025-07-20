import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_applicationEquals_3_1_ArraySimple = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ArraySimple",
    factory: ArraySimple,
  })(typia.llm.application<ArraySimpleApplication, "3.1", { equal: true }>());

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
