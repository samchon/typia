import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_standardSchema_createValidate_DynamicTag =
  _test_standardSchema_validate("DynamicTag")<DynamicTag>(DynamicTag)(
    typia.createValidate<DynamicTag>(),
  );
