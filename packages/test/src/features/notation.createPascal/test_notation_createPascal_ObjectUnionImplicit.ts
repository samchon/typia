import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_createValidatePascal_ObjectUnionImplicit =
  _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )<typia.PascalCase<ObjectUnionImplicit>>({
    convert: typia.notations.createValidatePascal<ObjectUnionImplicit>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionImplicit>>(),
  });
