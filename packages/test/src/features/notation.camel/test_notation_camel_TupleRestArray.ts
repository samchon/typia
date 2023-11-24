import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_validateCamel_TupleRestArray =
  _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )<typia.CamelCase<TupleRestArray>>({
    convert: (input) => typia.notations.validateCamel<TupleRestArray>(input),
    assert: typia.createAssert<typia.CamelCase<TupleRestArray>>(),
  });
