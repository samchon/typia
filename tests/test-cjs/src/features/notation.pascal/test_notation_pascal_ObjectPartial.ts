import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_notation_validatePascal_ObjectPartial = (): void =>
  _test_notation_validateGeneral("ObjectPartial")<ObjectPartial>(ObjectPartial)<
    typia.PascalCase<ObjectPartial>
  >({
    convert: (input) => typia.notations.validatePascal<ObjectPartial>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectPartial>>(),
  });
