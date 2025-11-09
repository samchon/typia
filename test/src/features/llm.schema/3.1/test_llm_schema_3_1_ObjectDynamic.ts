import typia from "typia";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectDynamic = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectDynamic",
  })(typia.llm.schema<ObjectDynamic, "3.1">({}));