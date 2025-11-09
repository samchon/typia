import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_createValidateSnake_ObjectUnionExplicitPointer = (): void =>
    _test_notation_validateGeneral("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
        ObjectUnionExplicitPointer
  )<typia.SnakeCase<ObjectUnionExplicitPointer>>({
    convert: typia.notations.createValidateSnake<ObjectUnionExplicitPointer>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionExplicitPointer>>(),
  });
