import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_prune_ObjectNullable = (): void =>
  _test_misc_prune("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
    typia.misc.prune<ObjectNullable>(input),
  );
