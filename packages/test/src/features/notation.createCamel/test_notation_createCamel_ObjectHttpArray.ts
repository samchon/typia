import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_createValidateCamel_ObjectHttpArray =
  _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )<typia.CamelCase<ObjectHttpArray>>({
    convert: typia.notations.createValidateCamel<ObjectHttpArray>(),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpArray>>(),
  });
