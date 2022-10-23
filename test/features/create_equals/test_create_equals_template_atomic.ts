import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_template_atomic = _test_equals(
    "template atomic",
    TemplateAtomic.generate,
    TSON.createEquals<TemplateAtomic>(),
);
