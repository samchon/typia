import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createIsPrune_ClassMethod = (): void =>
  _test_misc_isPrune("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.misc.createIsPrune<ClassMethod>(),
  );
