import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_notation_validatePascal_DynamicComposite =
  _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )<typia.PascalCase<DynamicComposite>>({
    convert: (input) => typia.notations.validatePascal<DynamicComposite>(input),
    assert: typia.createAssert<typia.PascalCase<DynamicComposite>>(),
  });
