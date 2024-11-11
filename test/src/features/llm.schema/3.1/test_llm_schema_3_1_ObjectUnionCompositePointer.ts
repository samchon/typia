import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_llm_schema_3_1_ObjectUnionCompositePointer = _test_llm_schema(
  {
    model: "3.1",
    name: "ObjectUnionCompositePointer",
  },
)(typia.llm.schema<ObjectUnionCompositePointer, "3.1">());
