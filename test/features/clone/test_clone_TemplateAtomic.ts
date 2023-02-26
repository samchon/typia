import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_clone_TemplateAtomic = _test_clone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.clone(input),
);
