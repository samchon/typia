import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createValidate_DynamicTag = (): void =>
  _test_validate("DynamicTag")<DynamicTag>(DynamicTag)(
    typia.createValidate<DynamicTag>(),
  );
