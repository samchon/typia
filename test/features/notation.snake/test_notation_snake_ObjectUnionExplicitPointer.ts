import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_notation_validateSnake_ObjectUnionExplicitPointer =
  _test_notation_validateGeneral(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)<
    typia.SnakeCase<ObjectUnionExplicitPointer>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ObjectUnionExplicitPointer>(input),
    assert: typia.createAssert<typia.SnakeCase<ObjectUnionExplicitPointer>>(),
  });
