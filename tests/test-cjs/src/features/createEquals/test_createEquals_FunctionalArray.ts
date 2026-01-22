import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createEquals_FunctionalArray = (): void =>
  _test_equals("FunctionalArray")<FunctionalArray>(FunctionalArray)(
    typia.createEquals<FunctionalArray>(),
  );
