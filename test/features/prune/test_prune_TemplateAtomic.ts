import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_prune_TemplateAtomic = _test_prune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.prune(input),
);
