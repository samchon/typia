import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createValidate_ArrayRecursive = (): void =>
  _test_validate("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.createValidate<ArrayRecursive>(),
  );
