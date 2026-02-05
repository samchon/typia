import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_createValidateKebab_ObjectHttpFormData = (): void =>
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.KebabCase<ObjectHttpFormData>>({
    convert: typia.notations.createValidateKebab<ObjectHttpFormData>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpFormData>>(),
  });
