import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_createValidateCamel_ObjectRequired = (): void =>
    _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
        ObjectRequired
  )<typia.CamelCase<ObjectRequired>>({
    convert: typia.notations.createValidateCamel<ObjectRequired>(),
    assert: typia.createAssert<typia.CamelCase<ObjectRequired>>(),
  });
