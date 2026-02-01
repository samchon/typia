import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_createValidateCamel_ObjectUnionCompositePointer = (): void =>
    _test_notation_validateGeneral("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer
  )<typia.CamelCase<ObjectUnionCompositePointer>>({
    convert: typia.notations.createValidateCamel<ObjectUnionCompositePointer>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionCompositePointer>>(),
  });
