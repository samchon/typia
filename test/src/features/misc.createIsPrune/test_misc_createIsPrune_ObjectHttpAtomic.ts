import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_createIsPrune_ObjectHttpAtomic = (): void =>
  _test_misc_isPrune("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.misc.createIsPrune<ObjectHttpAtomic>(),
  );
