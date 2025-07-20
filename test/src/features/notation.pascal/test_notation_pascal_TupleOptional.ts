import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validatePascal_TupleOptional = (): void =>
  _test_notation_validateGeneral("TupleOptional")<TupleOptional>(TupleOptional)<
    typia.PascalCase<TupleOptional>
  >({
    convert: (input) => typia.notations.validatePascal<TupleOptional>(input),
    assert: typia.createAssert<typia.PascalCase<TupleOptional>>(),
  });
