import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_createValidateSnake_TupleRestAtomic = (): void =>
    _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
        TupleRestAtomic
  )<typia.SnakeCase<TupleRestAtomic>>({
    convert: typia.notations.createValidateSnake<TupleRestAtomic>(),
    assert: typia.createAssert<typia.SnakeCase<TupleRestAtomic>>(),
  });
