import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectAlias = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectAlias",
  })(typia.llm.schema<ObjectAlias, "3.1">({}));