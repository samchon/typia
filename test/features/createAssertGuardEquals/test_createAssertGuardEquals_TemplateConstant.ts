import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertGuardEquals_TemplateConstant =
  _test_assertGuardEquals("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssertGuardEquals<TemplateConstant>());
