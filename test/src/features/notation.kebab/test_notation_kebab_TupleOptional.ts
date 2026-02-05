import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validateKebab_TupleOptional = (): void =>
  _test_notation_validateGeneral("TupleOptional")<TupleOptional>(TupleOptional)<
    typia.KebabCase<TupleOptional>
  >({
    convert: (input) => typia.notations.validateKebab<TupleOptional>(input),
    assert: typia.createAssert<typia.KebabCase<TupleOptional>>(),
  });
