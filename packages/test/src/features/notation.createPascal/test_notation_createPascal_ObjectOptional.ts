import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_createValidatePascal_ObjectOptional =
  _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )<typia.PascalCase<ObjectOptional>>({
    convert: typia.notations.createValidatePascal<ObjectOptional>(),
    assert: typia.createAssert<typia.PascalCase<ObjectOptional>>(),
  });
