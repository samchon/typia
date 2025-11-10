import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_validateKebab_ObjectIntersection = (): void =>
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.KebabCase<ObjectIntersection>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectIntersection>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectIntersection>>(),
  });
