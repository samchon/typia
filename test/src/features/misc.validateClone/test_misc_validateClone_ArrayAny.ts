import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_validateClone_ArrayAny = (): void =>
  _test_misc_validateClone("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
    typia.misc.validateClone<ArrayAny>(input),
  );
