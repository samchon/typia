import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_application_llama_ObjectUnionExplicit =
  _test_llm_application({
    model: "llama",
    name: "ObjectUnionExplicit",
  })(typia.llm.application<ObjectUnionExplicitApplication, "llama">());

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
