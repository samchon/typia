import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_application_3_0_ObjectUnionDouble = _test_llm_application(
  {
    model: "3.0",
    name: "ObjectUnionDouble",
  },
)(typia.llm.application<ObjectUnionDoubleApplication, "3.0">());

interface ObjectUnionDoubleApplication {
  insert(p: { first: ObjectUnionDouble }): Promise<void>;
  reduce(p: {
    first: ObjectUnionDouble;
    second: ObjectUnionDouble | null;
  }): Promise<ObjectUnionDouble>;
  coalesce(p: {
    first: ObjectUnionDouble | null;
    second: ObjectUnionDouble | null;
    third?: ObjectUnionDouble | null;
  }): Promise<ObjectUnionDouble | null>;
}
