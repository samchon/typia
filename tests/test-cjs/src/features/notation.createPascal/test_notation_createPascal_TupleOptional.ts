import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_createValidatePascal_TupleOptional = (): void =>
  _test_notation_validateGeneral("TupleOptional")<TupleOptional>(TupleOptional)<
    typia.PascalCase<TupleOptional>
  >({
    convert: typia.notations.createValidatePascal<TupleOptional>(),
    assert: typia.createAssert<typia.PascalCase<TupleOptional>>(),
  });
