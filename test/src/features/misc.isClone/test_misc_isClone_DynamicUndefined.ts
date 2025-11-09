import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_isClone_DynamicUndefined = (): void =>
  _test_misc_isClone("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
    (input) => typia.misc.isClone<DynamicUndefined>(input),
  );
