import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_schema_3_0_ArrayHierarchicalPointer = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.schema<ArrayHierarchicalPointer, "3.0">());
