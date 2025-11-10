import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_createValidateKebab_ObjectUnionExplicitPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
      typia.KebabCase<ObjectUnionExplicitPointer>
    >({
      convert:
        typia.notations.createValidateKebab<ObjectUnionExplicitPointer>(),
      assert: typia.createAssert<typia.KebabCase<ObjectUnionExplicitPointer>>(),
    });
