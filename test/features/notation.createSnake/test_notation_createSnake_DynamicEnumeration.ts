import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_notation_createValidateSnake_DynamicEnumeration =
  _test_notation_validateGeneral("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )<typia.SnakeCase<DynamicEnumeration>>({
    convert: typia.notations.createValidateSnake<DynamicEnumeration>(),
    assert: typia.createAssert<typia.SnakeCase<DynamicEnumeration>>(),
  });
