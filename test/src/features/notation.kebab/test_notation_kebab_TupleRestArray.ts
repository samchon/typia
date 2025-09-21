import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_validateKebab_TupleRestArray = (): void =>
  _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )<typia.KebabCase<TupleRestArray>>({
    convert: (input) => typia.notations.validateKebab<TupleRestArray>(input),
    assert: typia.createAssert<typia.KebabCase<TupleRestArray>>(),
  });
