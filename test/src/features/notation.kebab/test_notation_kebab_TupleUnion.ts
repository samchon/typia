import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_validateKebab_TupleUnion = (): void =>
  _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
    typia.KebabCase<TupleUnion>
  >({
    convert: (input) => typia.notations.validateKebab<TupleUnion>(input),
    assert: typia.createAssert<typia.KebabCase<TupleUnion>>(),
  });
