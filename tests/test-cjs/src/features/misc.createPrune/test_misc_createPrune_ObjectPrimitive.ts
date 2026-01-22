import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createPrune_ObjectPrimitive = (): void =>
  _test_misc_prune("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.misc.createPrune<ObjectPrimitive>(),
  );
