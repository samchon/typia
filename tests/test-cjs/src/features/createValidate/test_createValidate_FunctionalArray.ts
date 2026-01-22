import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createValidate_FunctionalArray = (): void =>
  _test_validate("FunctionalArray")<FunctionalArray>(FunctionalArray)(
    typia.createValidate<FunctionalArray>(),
  );
