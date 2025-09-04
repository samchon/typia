import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_standardSchema_createValidate_DynamicArray = (): void =>
  _test_standardSchema_validate("DynamicArray")<DynamicArray>(DynamicArray)(
    typia.createValidate<DynamicArray>(),
  );
