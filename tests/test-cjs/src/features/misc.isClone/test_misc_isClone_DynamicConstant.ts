import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_isClone_DynamicConstant = (): void =>
  _test_misc_isClone("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    (input) => typia.misc.isClone<DynamicConstant>(input),
  );
