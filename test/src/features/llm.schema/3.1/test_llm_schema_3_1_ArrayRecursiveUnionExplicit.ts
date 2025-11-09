import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ArrayRecursiveUnionExplicit = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.schema<ArrayRecursiveUnionExplicit, "3.1">({}));