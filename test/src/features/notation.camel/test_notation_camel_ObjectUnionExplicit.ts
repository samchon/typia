import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_validateCamel_ObjectUnionExplicit = (): void =>
    _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
        ObjectUnionExplicit
  )<typia.CamelCase<ObjectUnionExplicit>>({
    convert: (input) => typia.notations.validateCamel<ObjectUnionExplicit>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionExplicit>>(),
  });
