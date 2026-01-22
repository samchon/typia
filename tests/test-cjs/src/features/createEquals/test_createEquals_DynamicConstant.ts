import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createEquals_DynamicConstant = (): void =>
  _test_equals("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    typia.createEquals<DynamicConstant>(),
  );
