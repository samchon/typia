import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_validateKebab_TupleRestAtomic = (): void =>
  _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )<typia.KebabCase<TupleRestAtomic>>({
    convert: (input) => typia.notations.validateKebab<TupleRestAtomic>(input),
    assert: typia.createAssert<typia.KebabCase<TupleRestAtomic>>(),
  });
