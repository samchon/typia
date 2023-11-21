import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_notation_validateCamel_DynamicUndefined =
  _test_notation_validateGeneral("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )<typia.CamelCase<DynamicUndefined>>({
    convert: (input) => typia.notations.validateCamel<DynamicUndefined>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicUndefined>>(),
  });
