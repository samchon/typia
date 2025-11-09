import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_createValidate_ObjectDate = (): void =>
  _test_validate("ObjectDate")<ObjectDate>(ObjectDate)(
    typia.createValidate<ObjectDate>(),
  );
