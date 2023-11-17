import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_notation_createValidateSnake_DynamicTemplate =
  _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )<typia.SnakeCase<DynamicTemplate>>({
    convert: typia.notations.createValidateSnake<DynamicTemplate>(),
    assert: typia.createAssert<typia.SnakeCase<DynamicTemplate>>(),
  });
