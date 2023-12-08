import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_createValidatePascal_ObjectDynamic =
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.PascalCase<ObjectDynamic>
  >({
    convert: typia.notations.createValidatePascal<ObjectDynamic>(),
    assert: typia.createAssert<typia.PascalCase<ObjectDynamic>>(),
  });
