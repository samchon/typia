import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_validateCamel_ObjectUnionImplicit = (): void =>
    _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
        ObjectUnionImplicit
  )<typia.CamelCase<ObjectUnionImplicit>>({
    convert: (input) => typia.notations.validateCamel<ObjectUnionImplicit>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionImplicit>>(),
  });
