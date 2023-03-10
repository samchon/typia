import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createPrune_TemplateUnion = _test_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createPrune<TemplateUnion>(),
);
