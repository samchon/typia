import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_is_DynamicUndefined = (): void =>
  _test_is("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)((input) =>
    typia.is<DynamicUndefined>(input),
  );
