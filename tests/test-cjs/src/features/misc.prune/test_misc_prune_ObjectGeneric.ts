import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_prune_ObjectGeneric = (): void =>
  _test_misc_prune("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
    typia.misc.prune<ObjectGeneric>(input),
  );
