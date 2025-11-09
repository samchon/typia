import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectUnionComposite = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ObjectUnionComposite",
  })(typia.llm.schema<ObjectUnionComposite, "3.1">({}));