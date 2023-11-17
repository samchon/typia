import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_validatePascal_ObjectUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
    typia.PascalCase<ObjectUnionExplicitPointer>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectUnionExplicitPointer>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionExplicitPointer>>(),
  });
