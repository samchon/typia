import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_schema_3_1_ObjectDescription = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectDescription",
  })(typia.llm.schema<ObjectDescription, "3.1">({}));
