import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_standardSchema_createValidate_ToJsonNull =
  _test_standardSchema_validate("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createValidate<ToJsonNull>(),
  );
