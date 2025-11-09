import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_is_ObjectDate = (): void =>
  _test_is("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
    typia.is<ObjectDate>(input),
  );
