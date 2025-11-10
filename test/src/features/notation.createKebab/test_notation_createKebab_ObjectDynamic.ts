import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_notation_createValidateKebab_ObjectDynamic = (): void =>
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.KebabCase<ObjectDynamic>
  >({
    convert: typia.notations.createValidateKebab<ObjectDynamic>(),
    assert: typia.createAssert<typia.KebabCase<ObjectDynamic>>(),
  });
