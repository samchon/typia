import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_misc_createIsPrune_ObjectHttpTypeTag = (): void =>
  _test_misc_isPrune("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.misc.createIsPrune<ObjectHttpTypeTag>(),
  );
