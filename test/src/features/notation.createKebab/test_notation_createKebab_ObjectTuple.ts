import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_createValidateKebab_ObjectTuple = (): void =>
  _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(ObjectTuple)<
    typia.KebabCase<ObjectTuple>
  >({
    convert: typia.notations.createValidateKebab<ObjectTuple>(),
    assert: typia.createAssert<typia.KebabCase<ObjectTuple>>(),
  });
