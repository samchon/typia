import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_llm_applicationEquals_ObjectUndefined = (): void =>
  _test_llm_applicationEquals({
    name: "ObjectUndefined",
    factory: ObjectUndefined,
  })(typia.llm.application<ObjectUndefinedApplication, { equals: true }>());

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
