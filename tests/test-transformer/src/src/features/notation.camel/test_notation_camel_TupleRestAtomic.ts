import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_validateCamel_TupleRestAtomic = (): void =>
    _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
        TupleRestAtomic
  )<typia.CamelCase<TupleRestAtomic>>({
    convert: (input) => typia.notations.validateCamel<TupleRestAtomic>(input),
    assert: typia.createAssert<typia.CamelCase<TupleRestAtomic>>(),
  });
