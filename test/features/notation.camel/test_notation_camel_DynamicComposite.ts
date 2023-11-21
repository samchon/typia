import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_notation_validateCamel_DynamicComposite =
  _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )<typia.CamelCase<DynamicComposite>>({
    convert: (input) => typia.notations.validateCamel<DynamicComposite>(input),
    assert: typia.createAssert<typia.CamelCase<DynamicComposite>>(),
  });
