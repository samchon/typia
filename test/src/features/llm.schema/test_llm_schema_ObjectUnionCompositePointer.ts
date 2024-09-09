import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_llm_schema_ObjectUnionCompositePointer = _test_llm_schema(
  "ObjectUnionCompositePointer",
)(typia.llm.schema<ObjectUnionCompositePointer>());
