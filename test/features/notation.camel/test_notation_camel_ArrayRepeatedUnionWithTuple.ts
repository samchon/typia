import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_validateCamel_ArrayRepeatedUnionWithTuple =
  _test_notation_validateGeneral(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)<
    typia.CamelCase<ArrayRepeatedUnionWithTuple>
  >({
    convert: (input) =>
      typia.notations.validateCamel<ArrayRepeatedUnionWithTuple>(input),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedUnionWithTuple>>(),
  });
