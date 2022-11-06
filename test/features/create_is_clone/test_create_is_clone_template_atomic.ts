import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_template_atomic = _test_is_clone(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createIsClone<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
