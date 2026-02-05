import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_createValidateKebab_ObjectHttpArray = (): void =>
  _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )<typia.KebabCase<ObjectHttpArray>>({
    convert: typia.notations.createValidateKebab<ObjectHttpArray>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpArray>>(),
  });
