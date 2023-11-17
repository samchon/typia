import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_createValidateCamel_ObjectIntersection =
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.CamelCase<ObjectIntersection>>({
    convert: typia.notations.createValidateCamel<ObjectIntersection>(),
    assert: typia.createAssert<typia.CamelCase<ObjectIntersection>>(),
  });
