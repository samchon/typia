import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_createPrune_ObjectHttpAtomic = (): void =>
  _test_misc_prune("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.misc.createPrune<ObjectHttpAtomic>(),
  );
