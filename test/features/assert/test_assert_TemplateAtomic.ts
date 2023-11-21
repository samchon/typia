import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assert_TemplateAtomic = _test_assert(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assert<TemplateAtomic>(input),
);
