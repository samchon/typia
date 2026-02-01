import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_createValidateCamel_ObjectDynamic = (): void =>
    _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(
        ObjectDynamic
  )<typia.CamelCase<ObjectDynamic>>({
    convert: typia.notations.createValidateCamel<ObjectDynamic>(),
    assert: typia.createAssert<typia.CamelCase<ObjectDynamic>>(),
  });
