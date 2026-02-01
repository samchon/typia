import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_notation_validateCamel_ObjectUndefined = (): void =>
    _test_notation_validateGeneral("ObjectUndefined")<ObjectUndefined>(
        ObjectUndefined
  )<typia.CamelCase<ObjectUndefined>>({
    convert: (input) => typia.notations.validateCamel<ObjectUndefined>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUndefined>>(),
  });
