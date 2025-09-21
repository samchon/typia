import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_createValidateKebab_ObjectPartial = (): void =>
  _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(ObjectPartial)<
    typia.KebabCase<ObjectPartial>
  >({
    convert: typia.notations.createValidateKebab<ObjectPartial>(),
    assert: typia.createAssert<typia.KebabCase<ObjectPartial>>(),
  });
