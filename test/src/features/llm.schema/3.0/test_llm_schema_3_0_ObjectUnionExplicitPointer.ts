import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectUnionExplicitPointer = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectUnionExplicitPointer",
  })(typia.llm.schema<ObjectUnionExplicitPointer, "3.0">());