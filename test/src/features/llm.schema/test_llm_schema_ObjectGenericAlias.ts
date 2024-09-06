import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_llm_schema_ObjectGenericAlias = _test_llm_schema(
  "ObjectGenericAlias",
)(typia.llm.schema<ObjectGenericAlias>());
