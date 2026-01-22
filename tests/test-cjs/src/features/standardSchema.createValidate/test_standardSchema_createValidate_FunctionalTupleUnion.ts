import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_standardSchema_createValidate_FunctionalTupleUnion =
  (): void =>
    _test_standardSchema_validate("FunctionalTupleUnion")<FunctionalTupleUnion>(
      FunctionalTupleUnion,
    )(typia.createValidate<FunctionalTupleUnion>());
