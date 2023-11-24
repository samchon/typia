import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_notation_createValidateSnake_TupleRestObject =
  _test_notation_validateGeneral("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )<typia.SnakeCase<TupleRestObject>>({
    convert: typia.notations.createValidateSnake<TupleRestObject>(),
    assert: typia.createAssert<typia.SnakeCase<TupleRestObject>>(),
  });
