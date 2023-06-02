import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_prune_TemplateUnion = _test_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.prune(input),
);
