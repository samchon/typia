import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_validateSnake_TupleUnion = (): void =>
    _test_notation_validateGeneral("TupleUnion")<TupleUnion>(
        TupleUnion
  )<typia.SnakeCase<TupleUnion>>({
    convert: (input) => typia.notations.validateSnake<TupleUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<TupleUnion>>(),
  });
