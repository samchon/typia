import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_schema_3_1_ObjectGenericUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectGenericUnion",
  })(typia.llm.schema<ObjectGenericUnion, "3.1">({}));
