import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_clone_TemplateAtomic = _test_misc_clone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.misc.clone(input),
);
