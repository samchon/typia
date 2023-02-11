import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TemplateConstant = _test_prune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createPrune<TemplateConstant>(),
);