import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createValidate_ArraySimple = (): void =>
  _test_validate("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.createValidate<ArraySimple>(),
  );
