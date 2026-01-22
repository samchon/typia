import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_createIsClone_DynamicNever = (): void =>
  _test_misc_isClone("DynamicNever")<DynamicNever>(DynamicNever)(
    typia.misc.createIsClone<DynamicNever>(),
  );
