import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_validateSnake_ObjectHttpFormData = (): void =>
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.SnakeCase<ObjectHttpFormData>>({
    convert: (input) =>
      typia.notations.validateSnake<ObjectHttpFormData>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpFormData>>(),
  });
