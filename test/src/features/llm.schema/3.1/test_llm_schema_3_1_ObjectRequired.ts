import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_schema_3_1_ObjectRequired = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectRequired",
  })(typia.llm.schema<ObjectRequired, "3.1">({}));
