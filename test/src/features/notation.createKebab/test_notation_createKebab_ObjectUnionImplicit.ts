import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_createValidateKebab_ObjectUnionImplicit = (): void =>
  _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )<typia.KebabCase<ObjectUnionImplicit>>({
    convert: typia.notations.createValidateKebab<ObjectUnionImplicit>(),
    assert: typia.createAssert<typia.KebabCase<ObjectUnionImplicit>>(),
  });
