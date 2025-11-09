import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_createValidateSnake_ObjectHttpAtomic = (): void =>
  _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )<typia.SnakeCase<ObjectHttpAtomic>>({
    convert: typia.notations.createValidateSnake<ObjectHttpAtomic>(),
    assert: typia.createAssert<typia.SnakeCase<ObjectHttpAtomic>>(),
  });
