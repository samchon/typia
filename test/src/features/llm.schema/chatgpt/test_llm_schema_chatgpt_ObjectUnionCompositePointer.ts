import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ObjectUnionCompositePointer = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ObjectUnionCompositePointer",
  })(typia.llm.schema<ObjectUnionCompositePointer, "chatgpt">());