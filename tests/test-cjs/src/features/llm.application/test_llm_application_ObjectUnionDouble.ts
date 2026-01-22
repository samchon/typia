import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_llm_application_ObjectUnionDouble = (): void =>
  _test_llm_application({
    name: "ObjectUnionDouble",
    factory: ObjectUnionDouble,
  })(typia.llm.application<ObjectUnionDoubleApplication>());

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
