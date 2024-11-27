import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_application_3_0_ObjectOptional = _test_llm_application({
  model: "3.0",
  name: "ObjectOptional",
})(typia.llm.application<ObjectOptionalApplication, "3.0">());

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: {
    first: ObjectOptional;
    second: ObjectOptional | null;
  }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null;
    second: ObjectOptional | null;
    third?: ObjectOptional | null;
  }): Promise<ObjectOptional | null>;
}
