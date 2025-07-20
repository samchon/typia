import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_standardSchema_createValidate_FunctionalObjectUnion =
  (): void =>
    _test_standardSchema_validate(
      "FunctionalObjectUnion",
    )<FunctionalObjectUnion>(FunctionalObjectUnion)(
      typia.createValidate<FunctionalObjectUnion>(),
    );
