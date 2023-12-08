import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_notation_createValidateSnake_DynamicComposite =
  _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )<typia.SnakeCase<DynamicComposite>>({
    convert: typia.notations.createValidateSnake<DynamicComposite>(),
    assert: typia.createAssert<typia.SnakeCase<DynamicComposite>>(),
  });
