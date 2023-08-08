import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_clone_TemplateConstant = _test_misc_clone(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.misc.createClone<TemplateConstant>(),
);
