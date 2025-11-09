import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(typia.llm.schema<ArrayRecursiveUnionExplicitPointer, "chatgpt">({}));