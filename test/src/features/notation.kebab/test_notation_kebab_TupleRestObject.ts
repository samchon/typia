import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_notation_validateKebab_TupleRestObject = (): void =>
  _test_notation_validateGeneral("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )<typia.KebabCase<TupleRestObject>>({
    convert: (input) => typia.notations.validateKebab<TupleRestObject>(input),
    assert: typia.createAssert<typia.KebabCase<TupleRestObject>>(),
  });
