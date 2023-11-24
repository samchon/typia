import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_notation_createValidateCamel_ObjectGeneric =
  _test_notation_validateGeneral("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)<
    typia.CamelCase<ObjectGeneric>
  >({
    convert: typia.notations.createValidateCamel<ObjectGeneric>(),
    assert: typia.createAssert<typia.CamelCase<ObjectGeneric>>(),
  });
