import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_validateCamel_ObjectDynamic =
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.CamelCase<ObjectDynamic>
  >({
    convert: (input) => typia.notations.validateCamel<ObjectDynamic>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectDynamic>>(),
  });
