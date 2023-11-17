import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_validateCamel_ArrayMatrix =
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.CamelCase<ArrayMatrix>
  >({
    convert: (input) => typia.notations.validateCamel<ArrayMatrix>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayMatrix>>(),
  });
