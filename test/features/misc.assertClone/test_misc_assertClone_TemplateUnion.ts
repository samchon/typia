import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_assertClone_TemplateUnion = _test_misc_assertClone(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.assertClone<TemplateUnion>(input),
);
