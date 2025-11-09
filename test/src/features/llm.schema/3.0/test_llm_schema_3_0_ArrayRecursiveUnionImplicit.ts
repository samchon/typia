import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.schema<ArrayRecursiveUnionImplicit, "3.0">());