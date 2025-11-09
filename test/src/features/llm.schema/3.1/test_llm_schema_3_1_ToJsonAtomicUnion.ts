import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_schema_3_1_ToJsonAtomicUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ToJsonAtomicUnion",
  })(typia.llm.schema<ToJsonAtomicUnion, "3.1">({}));
