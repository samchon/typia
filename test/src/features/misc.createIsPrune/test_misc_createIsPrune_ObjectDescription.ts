import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createIsPrune_ObjectDescription = (): void =>
  _test_misc_isPrune("ObjectDescription")<ObjectDescription>(ObjectDescription)(
    typia.misc.createIsPrune<ObjectDescription>(),
  );
