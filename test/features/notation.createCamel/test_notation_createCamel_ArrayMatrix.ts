import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_createValidateCamel_ArrayMatrix =
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.CamelCase<ArrayMatrix>
  >({
    convert: typia.notations.createValidateCamel<ArrayMatrix>(),
    assert: typia.createAssert<typia.CamelCase<ArrayMatrix>>(),
  });
