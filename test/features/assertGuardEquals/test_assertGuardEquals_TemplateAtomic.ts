import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuardEquals_TemplateAtomic = _test_assertGuardEquals(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assertGuardEquals<TemplateAtomic>(input),
);
