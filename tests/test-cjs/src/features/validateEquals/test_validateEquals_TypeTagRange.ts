import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_validateEquals_TypeTagRange = (): void =>
  _test_validateEquals("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
    typia.validateEquals<TypeTagRange>(input),
  );
