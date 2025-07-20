import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_schema_3_1_ObjectOptional = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectOptional",
  })(typia.llm.schema<ObjectOptional, "3.1">({}));
