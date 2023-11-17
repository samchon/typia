import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_notation_validateCamel_ArrayRecursive =
  _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )<typia.CamelCase<ArrayRecursive>>({
    convert: (input) => typia.notations.validateCamel<ArrayRecursive>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayRecursive>>(),
  });
