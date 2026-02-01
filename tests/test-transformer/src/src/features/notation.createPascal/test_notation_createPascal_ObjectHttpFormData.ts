import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_createValidatePascal_ObjectHttpFormData = (): void =>
    _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
        ObjectHttpFormData
  )<typia.PascalCase<ObjectHttpFormData>>({
    convert: typia.notations.createValidatePascal<ObjectHttpFormData>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpFormData>>(),
  });
