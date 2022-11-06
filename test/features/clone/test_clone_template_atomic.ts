import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_clone } from "./_test_clone";

export const test_clone_template_atomic = _test_clone(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.clone(input),
);
