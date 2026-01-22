import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_isPrune_ObjectNullable = (): void =>
  _test_misc_isPrune("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    (input) => typia.misc.isPrune<ObjectNullable>(input),
  );
