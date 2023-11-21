import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createPrune_TemplateAtomic = _test_misc_prune(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.misc.createPrune<TemplateAtomic>());
