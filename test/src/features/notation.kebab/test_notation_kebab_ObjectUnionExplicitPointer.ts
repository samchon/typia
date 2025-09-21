import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_validateKebab_ObjectUnionExplicitPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
      typia.KebabCase<ObjectUnionExplicitPointer>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ObjectUnionExplicitPointer>(input),
      assert: typia.createAssert<typia.KebabCase<ObjectUnionExplicitPointer>>(),
    });
