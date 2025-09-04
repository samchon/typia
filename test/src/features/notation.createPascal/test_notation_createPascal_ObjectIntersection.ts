import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_createValidatePascal_ObjectIntersection = (): void =>
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.PascalCase<ObjectIntersection>>({
    convert: typia.notations.createValidatePascal<ObjectIntersection>(),
    assert: typia.createAssert<typia.PascalCase<ObjectIntersection>>(),
  });
