import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createIs_DynamicConstant = (): void =>
  _test_is("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    typia.createIs<DynamicConstant>(),
  );
