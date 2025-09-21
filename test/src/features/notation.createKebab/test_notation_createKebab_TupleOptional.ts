import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_createValidateKebab_TupleOptional = (): void =>
  _test_notation_validateGeneral("TupleOptional")<TupleOptional>(TupleOptional)<
    typia.KebabCase<TupleOptional>
  >({
    convert: typia.notations.createValidateKebab<TupleOptional>(),
    assert: typia.createAssert<typia.KebabCase<TupleOptional>>(),
  });
