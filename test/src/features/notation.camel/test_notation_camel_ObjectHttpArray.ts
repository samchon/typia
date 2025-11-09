import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_validateCamel_ObjectHttpArray = (): void =>
    _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray
  )<typia.CamelCase<ObjectHttpArray>>({
    convert: (input) => typia.notations.validateCamel<ObjectHttpArray>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpArray>>(),
  });
