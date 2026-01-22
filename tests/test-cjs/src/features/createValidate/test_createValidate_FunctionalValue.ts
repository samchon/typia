import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createValidate_FunctionalValue = (): void =>
  _test_validate("FunctionalValue")<FunctionalValue>(FunctionalValue)(
    typia.createValidate<FunctionalValue>(),
  );
