import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_notation_createValidateCamel_DynamicJsonValue =
  _test_notation_validateGeneral("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )<typia.CamelCase<DynamicJsonValue>>({
    convert: typia.notations.createValidateCamel<DynamicJsonValue>(),
    assert: typia.createAssert<typia.CamelCase<DynamicJsonValue>>(),
  });
