import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_clone_ObjectDate = (): void =>
  _test_misc_clone("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
    typia.misc.clone<ObjectDate>(input),
  );
