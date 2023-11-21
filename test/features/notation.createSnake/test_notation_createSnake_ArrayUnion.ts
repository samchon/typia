import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_createValidateSnake_ArrayUnion =
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.SnakeCase<ArrayUnion>
  >({
    convert: typia.notations.createValidateSnake<ArrayUnion>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayUnion>>(),
  });
