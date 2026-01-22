import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_validateEquals_FunctionalValue = (): void =>
  _test_validateEquals("FunctionalValue")<FunctionalValue>(FunctionalValue)(
    (input) => typia.validateEquals<FunctionalValue>(input),
  );
