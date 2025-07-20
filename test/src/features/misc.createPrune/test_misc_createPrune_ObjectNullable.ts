import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createPrune_ObjectNullable = (): void =>
  _test_misc_prune("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    typia.misc.createPrune<ObjectNullable>(),
  );
