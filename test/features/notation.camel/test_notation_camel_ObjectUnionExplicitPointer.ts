import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_validateCamel_ObjectUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
    typia.CamelCase<ObjectUnionExplicitPointer>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ObjectUnionExplicitPointer>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionExplicitPointer>>(),
  });
