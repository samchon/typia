import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_validate_ObjectDate = (): void =>
  _test_validate("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
    typia.validate<ObjectDate>(input),
  );
