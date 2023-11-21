import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_createValidateCamel_ObjectUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
    typia.CamelCase<ObjectUnionExplicitPointer>
  >({
    convert: typia.notations.createValidateCamel<ObjectUnionExplicitPointer>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionExplicitPointer>>(),
  });
