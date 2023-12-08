import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_validateCamel_ObjectIntersection =
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.CamelCase<ObjectIntersection>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectIntersection>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectIntersection>>(),
  });
