import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_validateCamel_TupleUnion =
  _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
    typia.CamelCase<TupleUnion>
  >({
    convert: (input) => typia.notations.validateCamel<TupleUnion>(input),
    assert: typia.createAssert<typia.CamelCase<TupleUnion>>(),
  });
