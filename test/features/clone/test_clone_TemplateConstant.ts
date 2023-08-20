import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_clone_TemplateConstant = _test_clone(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.clone<TemplateConstant>(input),
);
