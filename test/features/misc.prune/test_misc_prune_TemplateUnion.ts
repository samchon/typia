import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_prune_TemplateUnion = _test_misc_prune(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.prune<TemplateUnion>(input),
);
