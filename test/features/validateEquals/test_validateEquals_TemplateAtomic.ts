import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TemplateAtomic = _test_validateEquals(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => TSON.validateEquals(input),
);