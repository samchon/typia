import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_createValidatePascal_ObjectUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
    typia.PascalCase<ObjectUnionExplicitPointer>
  >({
    convert: typia.notations.createValidatePascal<ObjectUnionExplicitPointer>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionExplicitPointer>>(),
  });
