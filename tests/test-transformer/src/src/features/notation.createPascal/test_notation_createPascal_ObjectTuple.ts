import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_createValidatePascal_ObjectTuple = (): void =>
    _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(
        ObjectTuple
  )<typia.PascalCase<ObjectTuple>>({
    convert: typia.notations.createValidatePascal<ObjectTuple>(),
    assert: typia.createAssert<typia.PascalCase<ObjectTuple>>(),
  });
