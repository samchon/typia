import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_createValidatePascal_ObjectGenericArray = (): void =>
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.PascalCase<ObjectGenericArray>>({
    convert: typia.notations.createValidatePascal<ObjectGenericArray>(),
    assert: typia.createAssert<typia.PascalCase<ObjectGenericArray>>(),
  });
