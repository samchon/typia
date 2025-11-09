import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_createValidateSnake_ObjectGenericUnion = (): void =>
    _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion
  )<typia.SnakeCase<ObjectGenericUnion>>({
    convert: typia.notations.createValidateSnake<ObjectGenericUnion>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectGenericUnion>>(),
  });
