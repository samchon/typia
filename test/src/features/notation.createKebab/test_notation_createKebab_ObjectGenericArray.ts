import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_createValidateKebab_ObjectGenericArray = (): void =>
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.KebabCase<ObjectGenericArray>>({
    convert: typia.notations.createValidateKebab<ObjectGenericArray>(),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericArray>>(),
  });
