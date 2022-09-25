import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_template_atomic = _test_stringify(
    "template atomic",
    TemplateAtomic.generate(),
    (input) => TSON.stringify(input),
);
