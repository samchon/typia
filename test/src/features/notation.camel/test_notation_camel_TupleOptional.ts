import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validateCamel_TupleOptional = (): void =>
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional
  )<typia.CamelCase<TupleOptional>>({
    convert: (input) => typia.notations.validateCamel<TupleOptional>(input),
    assert: typia.createAssert<typia.CamelCase<TupleOptional>>(),
  });
