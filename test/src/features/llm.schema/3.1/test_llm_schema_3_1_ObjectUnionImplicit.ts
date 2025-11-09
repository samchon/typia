import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_schema_3_1_ObjectUnionImplicit = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectUnionImplicit",
  })(typia.llm.schema<ObjectUnionImplicit, "3.1">({}));
