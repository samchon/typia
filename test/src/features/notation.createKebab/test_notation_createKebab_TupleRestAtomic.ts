import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_createValidateKebab_TupleRestAtomic = (): void =>
  _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )<typia.KebabCase<TupleRestAtomic>>({
    convert: typia.notations.createValidateKebab<TupleRestAtomic>(),
    assert: typia.createAssert<typia.KebabCase<TupleRestAtomic>>(),
  });
