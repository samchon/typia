import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_template_atomic = _test_clone(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createClone<TemplateAtomic>(),
);
