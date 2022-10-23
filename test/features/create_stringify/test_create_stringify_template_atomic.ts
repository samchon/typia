import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_template_atomic = _test_stringify(
    "template atomic",
    TemplateAtomic.generate(),
    TSON.createStringify<TemplateAtomic>(),
);
