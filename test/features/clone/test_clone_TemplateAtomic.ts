import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TemplateAtomic = _test_clone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.clone(input),
);
