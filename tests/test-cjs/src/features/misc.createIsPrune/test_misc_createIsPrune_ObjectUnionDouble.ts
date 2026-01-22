import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createIsPrune_ObjectUnionDouble = (): void =>
  _test_misc_isPrune("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.misc.createIsPrune<ObjectUnionDouble>(),
  );
