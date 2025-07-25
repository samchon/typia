import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_validatePascal_ObjectIntersection = (): void =>
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.PascalCase<ObjectIntersection>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectIntersection>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectIntersection>>(),
  });
