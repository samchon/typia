import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_notation_createValidateCamel_DynamicSimple =
  _test_notation_validateGeneral("DynamicSimple")<DynamicSimple>(DynamicSimple)<
    typia.CamelCase<DynamicSimple>
  >({
    convert: typia.notations.createValidateCamel<DynamicSimple>(),
    assert: typia.createAssert<typia.CamelCase<DynamicSimple>>(),
  });
