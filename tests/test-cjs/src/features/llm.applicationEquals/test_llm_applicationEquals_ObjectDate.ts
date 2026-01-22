import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_llm_applicationEquals_ObjectDate = (): void =>
  _test_llm_applicationEquals({
    name: "ObjectDate",
    factory: ObjectDate,
  })(typia.llm.application<ObjectDateApplication, { equals: true }>());

interface ObjectDateApplication {
  insert(p: { first: ObjectDate }): Promise<void>;
  reduce(p: {
    first: ObjectDate;
    second: ObjectDate | null;
  }): Promise<ObjectDate>;
  coalesce(p: {
    first: ObjectDate | null;
    second: ObjectDate | null;
    third?: ObjectDate | null;
  }): Promise<ObjectDate | null>;
}
