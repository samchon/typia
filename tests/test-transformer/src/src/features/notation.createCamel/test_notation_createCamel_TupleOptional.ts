import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_createValidateCamel_TupleOptional = (): void =>
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional
  )<typia.CamelCase<TupleOptional>>({
    convert: typia.notations.createValidateCamel<TupleOptional>(),
    assert: typia.createAssert<typia.CamelCase<TupleOptional>>(),
  });
