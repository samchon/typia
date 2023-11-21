import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_createValidateCamel_ObjectUnionExplicit =
  _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )<typia.CamelCase<ObjectUnionExplicit>>({
    convert: typia.notations.createValidateCamel<ObjectUnionExplicit>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionExplicit>>(),
  });
