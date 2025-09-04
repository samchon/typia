import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_standardSchema_createValidate_DynamicTree = (): void =>
  _test_standardSchema_validate("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.createValidate<DynamicTree>(),
  );
