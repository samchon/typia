import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_createValidateSnake_TupleRestArray = (): void =>
  _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )<typia.SnakeCase<TupleRestArray>>({
    convert: typia.notations.createValidateSnake<TupleRestArray>(),
    assert: typia.createAssert<typia.SnakeCase<TupleRestArray>>(),
  });
