import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_createValidatePascal_ObjectGeneric = (): void =>
  _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)<
    typia.PascalCase<ObjectGeneric>
  >({
    convert: typia.notations.createValidatePascal<ObjectGeneric>(),
    assert: typia.createAssert<typia.PascalCase<ObjectGeneric>>(),
  });
