import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_validateEquals_TypeTagArray = (): void =>
  _test_validateEquals("TypeTagArray")<TypeTagArray>(TypeTagArray)((input) =>
    typia.validateEquals<TypeTagArray>(input),
  );
