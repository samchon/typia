import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_applicationOfValidate_llama_ObjectUnionDouble =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ObjectUnionDouble",
    factory: ObjectUnionDouble,
  })(typia.llm.applicationOfValidate<ObjectUnionDoubleApplication, "llama">());

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
