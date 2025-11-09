import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectJsonTag = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectJsonTag",
  })(typia.llm.schema<ObjectJsonTag, "3.1">({}));