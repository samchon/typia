import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_llm_schema_3_1_ObjectUnionExplicitPointer = _test_llm_schema({
  model: "3.1",
  name: "ObjectUnionExplicitPointer",
})(typia.llm.schema<ObjectUnionExplicitPointer, "3.1">({}));
