import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_llm_schema_ObjectJsonTag = _test_llm_schema("ObjectJsonTag")(
  typia.llm.schema<ObjectJsonTag>(),
);
