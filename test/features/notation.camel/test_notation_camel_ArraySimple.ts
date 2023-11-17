import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_notation_validateCamel_ArraySimple =
  _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
    typia.CamelCase<ArraySimple>
  >({
    convert: (input) => typia.notations.validateCamel<ArraySimple>(input),
    assert: typia.createAssert<typia.CamelCase<ArraySimple>>(),
  });
