import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_notation_createValidateCamel_TupleRestObject =
  _test_notation_validateGeneral("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )<typia.CamelCase<TupleRestObject>>({
    convert: typia.notations.createValidateCamel<TupleRestObject>(),
    assert: typia.createAssert<typia.CamelCase<TupleRestObject>>(),
  });
