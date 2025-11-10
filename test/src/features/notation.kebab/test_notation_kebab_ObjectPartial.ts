import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_validateKebab_ObjectPartial = (): void =>
  _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(ObjectPartial)<
    typia.KebabCase<ObjectPartial>
  >({
    convert: (input) => typia.notations.validateKebab<ObjectPartial>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectPartial>>(),
  });
