import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_createIsClone_DynamicSimple = (): void =>
  _test_misc_isClone("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    typia.misc.createIsClone<DynamicSimple>(),
  );
