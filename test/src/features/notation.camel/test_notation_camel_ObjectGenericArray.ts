import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_validateCamel_ObjectGenericArray = (): void =>
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.CamelCase<ObjectGenericArray>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectGenericArray>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectGenericArray>>(),
  });
