import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_validateKebab_ObjectGenericArray = (): void =>
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.KebabCase<ObjectGenericArray>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectGenericArray>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericArray>>(),
  });
