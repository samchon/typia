import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_validateKebab_ObjectUnionExplicit = (): void =>
  _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )<typia.KebabCase<ObjectUnionExplicit>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectUnionExplicit>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectUnionExplicit>>(),
  });
