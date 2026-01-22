import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_standardSchema_createValidate_FunctionalPropertyUnion =
  (): void =>
    _test_standardSchema_validate(
      "FunctionalPropertyUnion",
    )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
      typia.createValidate<FunctionalPropertyUnion>(),
    );
