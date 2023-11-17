import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuard_TemplateAtomic = _test_assertGuard(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
    typia.assertGuard<TemplateAtomic>(input),
);
