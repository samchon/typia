import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_validateEquals_TypeTagInfinite = (): void =>
  _test_validateEquals("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
    (input) => typia.validateEquals<TypeTagInfinite>(input),
  );
