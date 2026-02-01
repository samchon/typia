import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_validateSnake_TupleRestArray = (): void =>
    _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
        TupleRestArray
  )<typia.SnakeCase<TupleRestArray>>({
    convert: (input) => typia.notations.validateSnake<TupleRestArray>(input),
    assert: typia.createAssert<typia.SnakeCase<TupleRestArray>>(),
  });
