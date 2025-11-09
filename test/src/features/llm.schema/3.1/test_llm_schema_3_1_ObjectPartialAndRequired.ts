import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_schema_3_1_ObjectPartialAndRequired = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectPartialAndRequired",
  })(typia.llm.schema<ObjectPartialAndRequired, "3.1">({}));
