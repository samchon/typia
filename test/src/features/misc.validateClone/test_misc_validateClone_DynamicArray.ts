import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_validateClone_DynamicArray = (): void =>
  _test_misc_validateClone("DynamicArray")<DynamicArray>(DynamicArray)(
    (input) => typia.misc.validateClone<DynamicArray>(input),
  );
