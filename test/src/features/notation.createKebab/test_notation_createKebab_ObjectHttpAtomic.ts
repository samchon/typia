import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_createValidateKebab_ObjectHttpAtomic = (): void =>
  _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )<typia.KebabCase<ObjectHttpAtomic>>({
    convert: typia.notations.createValidateKebab<ObjectHttpAtomic>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpAtomic>>(),
  });
