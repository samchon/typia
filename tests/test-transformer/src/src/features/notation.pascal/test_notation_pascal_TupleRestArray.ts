import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_validatePascal_TupleRestArray = (): void =>
    _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
        TupleRestArray
  )<typia.PascalCase<TupleRestArray>>({
    convert: (input) => typia.notations.validatePascal<TupleRestArray>(input),
    assert: typia.createAssert<typia.PascalCase<TupleRestArray>>(),
  });
