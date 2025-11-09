import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_schema_3_0_ObjectDynamic = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectDynamic",
  })(typia.llm.schema<ObjectDynamic, "3.0">());
