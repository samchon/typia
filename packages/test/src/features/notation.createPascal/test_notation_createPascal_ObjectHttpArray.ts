import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_createValidatePascal_ObjectHttpArray =
  _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )<typia.PascalCase<ObjectHttpArray>>({
    convert: typia.notations.createValidatePascal<ObjectHttpArray>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpArray>>(),
  });
