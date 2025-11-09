import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_is_TypeTagFormat = (): void =>
  _test_is("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
    typia.is<TypeTagFormat>(input),
  );
