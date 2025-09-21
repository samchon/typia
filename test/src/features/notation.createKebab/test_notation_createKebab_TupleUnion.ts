import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_createValidateKebab_TupleUnion = (): void =>
  _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
    typia.KebabCase<TupleUnion>
  >({
    convert: typia.notations.createValidateKebab<TupleUnion>(),
    assert: typia.createAssert<typia.KebabCase<TupleUnion>>(),
  });
