import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_notation_validatePascal_TupleRestObject = (): void =>
    _test_notation_validateGeneral("TupleRestObject")<TupleRestObject>(
        TupleRestObject
  )<typia.PascalCase<TupleRestObject>>({
    convert: (input) => typia.notations.validatePascal<TupleRestObject>(input),
    assert: typia.createAssert<typia.PascalCase<TupleRestObject>>(),
  });
