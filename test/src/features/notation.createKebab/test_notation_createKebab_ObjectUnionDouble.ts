import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_createValidateKebab_ObjectUnionDouble = (): void =>
  _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )<typia.KebabCase<ObjectUnionDouble>>({
    convert: typia.notations.createValidateKebab<ObjectUnionDouble>(),
    assert: typia.createAssert<typia.KebabCase<ObjectUnionDouble>>(),
  });
