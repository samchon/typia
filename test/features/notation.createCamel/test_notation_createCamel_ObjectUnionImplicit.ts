import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_notation_createValidateCamel_ObjectUnionImplicit =
  _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )<typia.CamelCase<ObjectUnionImplicit>>({
    convert: typia.notations.createValidateCamel<ObjectUnionImplicit>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionImplicit>>(),
  });
