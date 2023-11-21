import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_notation_validateCamel_DynamicTemplate =
  _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )<typia.CamelCase<DynamicTemplate>>({
    convert: (input) => typia.notations.validateCamel<DynamicTemplate>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicTemplate>>(),
  });
