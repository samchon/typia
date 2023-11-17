import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertGuard_TemplateConstant = _test_assertGuard(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
    typia.assertGuard<TemplateConstant>(input),
);
