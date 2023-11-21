import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_createValidateCamel_ConstantConstEnumeration =
  _test_notation_validateGeneral(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)<
    typia.CamelCase<ConstantConstEnumeration>
  >({
    convert: typia.notations.createValidateCamel<ConstantConstEnumeration>(),
    assert: typia.createAssert<typia.CamelCase<ConstantConstEnumeration>>(),
  });
