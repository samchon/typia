import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_schema_3_1_ObjectUnionComposite = _test_llm_schema({
  model: "3.1",
  name: "ObjectUnionComposite",
})(typia.llm.schema<ObjectUnionComposite, "3.1">());
