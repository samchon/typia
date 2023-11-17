import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_createValidateCamel_ArrayRepeatedOptional =
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.CamelCase<ArrayRepeatedOptional>
  >({
    convert: typia.notations.createValidateCamel<ArrayRepeatedOptional>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRepeatedOptional>>(),
  });
