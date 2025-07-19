import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_application_3_0_ObjectUndefined =
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ObjectUndefined",
    factory: ObjectUndefined,
  })(
    typia.llm.application<ObjectUndefinedApplication, "3.0", { equal: true }>(),
  );

interface ObjectUndefinedApplication {
  insert(p: { first: ObjectUndefined }): Promise<void>;
  reduce(p: {
    first: ObjectUndefined;
    second: ObjectUndefined | null;
  }): Promise<ObjectUndefined>;
  coalesce(p: {
    first: ObjectUndefined | null;
    second: ObjectUndefined | null;
    third?: ObjectUndefined | null;
  }): Promise<ObjectUndefined | null>;
}
