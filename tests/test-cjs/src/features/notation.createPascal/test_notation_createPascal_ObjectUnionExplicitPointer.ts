import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_createValidatePascal_ObjectUnionExplicitPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
      typia.PascalCase<ObjectUnionExplicitPointer>
    >({
      convert:
        typia.notations.createValidatePascal<ObjectUnionExplicitPointer>(),
      assert:
        typia.createAssert<typia.PascalCase<ObjectUnionExplicitPointer>>(),
    });
