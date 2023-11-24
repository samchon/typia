import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_createValidateClone_DynamicArray =
  _test_misc_validateClone("DynamicArray")<DynamicArray>(DynamicArray)(
    typia.misc.createValidateClone<DynamicArray>(),
  );
