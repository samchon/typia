import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_llm_schema_3_0_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "3.0">());
