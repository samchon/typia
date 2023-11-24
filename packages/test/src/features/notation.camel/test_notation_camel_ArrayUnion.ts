import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_validateCamel_ArrayUnion =
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.CamelCase<ArrayUnion>
  >({
    convert: (input) => typia.notations.validateCamel<ArrayUnion>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayUnion>>(),
  });
