import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_createValidateCamel_ObjectGenericArray = (): void =>
    _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray
  )<typia.CamelCase<ObjectGenericArray>>({
    convert: typia.notations.createValidateCamel<ObjectGenericArray>(),
    assert: typia.createAssert<typia.CamelCase<ObjectGenericArray>>(),
  });
