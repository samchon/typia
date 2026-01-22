import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_notation_validateCamel_ObjectHttpFormData = (): void =>
  _test_notation_validateGeneral("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )<typia.CamelCase<ObjectHttpFormData>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectHttpFormData>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectHttpFormData>>(),
  });
