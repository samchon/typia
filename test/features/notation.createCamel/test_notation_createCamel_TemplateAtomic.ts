import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_createValidateCamel_TemplateAtomic =
  _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )<typia.CamelCase<TemplateAtomic>>({
    convert: typia.notations.createValidateCamel<TemplateAtomic>(),
    assert: typia.createAssert<typia.CamelCase<TemplateAtomic>>(),
  });
