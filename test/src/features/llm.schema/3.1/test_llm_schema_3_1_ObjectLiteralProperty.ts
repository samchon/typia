import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_schema_3_1_ObjectLiteralProperty = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectLiteralProperty",
  })(typia.llm.schema<ObjectLiteralProperty, "3.1">({}));
