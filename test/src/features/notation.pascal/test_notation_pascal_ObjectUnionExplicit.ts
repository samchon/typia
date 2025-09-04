import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_validatePascal_ObjectUnionExplicit = (): void =>
  _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )<typia.PascalCase<ObjectUnionExplicit>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectUnionExplicit>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionExplicit>>(),
  });
