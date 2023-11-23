import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_validateSnake_TupleRestAtomic =
  _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )<typia.SnakeCase<TupleRestAtomic>>({
    convert: (input) => typia.notations.validateSnake<TupleRestAtomic>(input),
    assert: typia.createAssert<typia.SnakeCase<TupleRestAtomic>>(),
  });
