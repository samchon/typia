import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createValidateEquals_TypeTagInfinite = (): void =>
  _test_validateEquals("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
    typia.createValidateEquals<TypeTagInfinite>(),
  );
