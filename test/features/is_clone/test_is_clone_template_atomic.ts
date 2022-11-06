import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_template_atomic = _test_is_clone(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.isClone(input),
    TemplateAtomic.SPOILERS,
);
