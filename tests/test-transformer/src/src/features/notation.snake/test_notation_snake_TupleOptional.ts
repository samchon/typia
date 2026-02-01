import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validateSnake_TupleOptional = (): void =>
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional
  )<typia.SnakeCase<TupleOptional>>({
    convert: (input) => typia.notations.validateSnake<TupleOptional>(input),
    assert: typia.createAssert<typia.SnakeCase<TupleOptional>>(),
  });
