import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_validatePascal_ObjectHttpFormData =
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.PascalCase<ObjectHttpFormData>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectHttpFormData>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpFormData>>(),
  });
