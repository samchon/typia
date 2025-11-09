import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createValidate_ToJsonArray = (): void =>
  _test_validate("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    typia.createValidate<ToJsonArray>(),
  );
