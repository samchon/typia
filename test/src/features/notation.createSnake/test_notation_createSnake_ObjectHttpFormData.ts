import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_createValidateSnake_ObjectHttpFormData =
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.SnakeCase<ObjectHttpFormData>>({
    convert: typia.notations.createValidateSnake<ObjectHttpFormData>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpFormData>>(),
  });
