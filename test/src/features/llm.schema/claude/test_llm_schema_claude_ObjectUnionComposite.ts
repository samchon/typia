import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_ObjectUnionComposite = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectUnionComposite",
  })(typia.llm.schema<ObjectUnionComposite, "claude">({}));