import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createValidate_FunctionalTupleUnion = (): void =>
  _test_validate("FunctionalTupleUnion")<FunctionalTupleUnion>(
    FunctionalTupleUnion,
  )(typia.createValidate<FunctionalTupleUnion>());
