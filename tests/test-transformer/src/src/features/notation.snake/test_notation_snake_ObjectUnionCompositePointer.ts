import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_validateSnake_ObjectUnionCompositePointer = (): void =>
    _test_notation_validateGeneral("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer
  )<typia.SnakeCase<ObjectUnionCompositePointer>>({
    convert: (input) => typia.notations.validateSnake<ObjectUnionCompositePointer>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionCompositePointer>>(),
  });
