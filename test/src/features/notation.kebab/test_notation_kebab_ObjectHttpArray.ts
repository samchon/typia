import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_notation_validateKebab_ObjectHttpArray = (): void =>
  _test_notation_validateGeneral("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )<typia.KebabCase<ObjectHttpArray>>({
    convert: (input) => typia.notations.validateKebab<ObjectHttpArray>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpArray>>(),
  });
