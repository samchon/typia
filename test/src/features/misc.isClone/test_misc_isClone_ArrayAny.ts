import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_isClone_ArrayAny = (): void =>
  _test_misc_isClone("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
    typia.misc.isClone<ArrayAny>(input),
  );
