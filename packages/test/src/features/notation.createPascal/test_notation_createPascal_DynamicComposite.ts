import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_notation_createValidatePascal_DynamicComposite =
  _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )<typia.PascalCase<DynamicComposite>>({
    convert: typia.notations.createValidatePascal<DynamicComposite>(),
    assert: typia.createAssert<typia.PascalCase<DynamicComposite>>(),
  });
