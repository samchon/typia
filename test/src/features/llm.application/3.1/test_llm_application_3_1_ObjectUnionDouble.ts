import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_application_3_1_ObjectUnionDouble = _test_llm_application(
  {
    model: "3.1",
    name: "ObjectUnionDouble",
  },
)(typia.llm.application<ObjectUnionDoubleApplication, "3.1">());

interface ObjectUnionDoubleApplication {
  insert(first: ObjectUnionDouble): Promise<void>;
  reduce(
    first: ObjectUnionDouble,
    second: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble>;
  coalesce(
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble | null>;
}
