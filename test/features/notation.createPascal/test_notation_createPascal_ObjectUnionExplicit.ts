import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_notation_createValidatePascal_ObjectUnionExplicit =
  _test_notation_validateGeneral("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )<typia.PascalCase<ObjectUnionExplicit>>({
    convert: typia.notations.createValidatePascal<ObjectUnionExplicit>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionExplicit>>(),
  });
