import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_application_chatgpt_ObjectUnionExplicit =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionExplicit",
  })(typia.llm.application<ObjectUnionExplicitApplication, "chatgpt">());

interface ObjectUnionExplicitApplication {
  insert(first: ObjectUnionExplicit): Promise<void>;
  reduce(
    first: ObjectUnionExplicit,
    second: ObjectUnionExplicit | null,
  ): Promise<ObjectUnionExplicit>;
  coalesce(
    first: ObjectUnionExplicit | null,
    second: ObjectUnionExplicit | null,
    third?: ObjectUnionExplicit | null,
  ): Promise<ObjectUnionExplicit | null>;
}
