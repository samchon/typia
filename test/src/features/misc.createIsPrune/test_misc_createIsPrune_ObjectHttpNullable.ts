import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createIsPrune_ObjectHttpNullable = (): void =>
  _test_misc_isPrune("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.misc.createIsPrune<ObjectHttpNullable>());
