import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_application_claude_ObjectUnionImplicit =
  _test_llm_application({
    model: "claude",
    name: "ObjectUnionImplicit",
  })(typia.llm.application<ObjectUnionImplicitApplication, "claude">());

interface ObjectUnionImplicitApplication {
  insert(first: ObjectUnionImplicit): Promise<void>;
  reduce(
    first: ObjectUnionImplicit,
    second: ObjectUnionImplicit | null,
  ): Promise<ObjectUnionImplicit>;
  coalesce(
    first: ObjectUnionImplicit | null,
    second: ObjectUnionImplicit | null,
    third?: ObjectUnionImplicit | null,
  ): Promise<ObjectUnionImplicit | null>;
}
