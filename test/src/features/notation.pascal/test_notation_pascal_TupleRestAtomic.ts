import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_validatePascal_TupleRestAtomic = (): void =>
    _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
        TupleRestAtomic
  )<typia.PascalCase<TupleRestAtomic>>({
    convert: (input) => typia.notations.validatePascal<TupleRestAtomic>(input),
    assert: typia.createAssert<typia.PascalCase<TupleRestAtomic>>(),
  });
