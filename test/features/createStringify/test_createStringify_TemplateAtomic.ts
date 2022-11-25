import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TemplateAtomic = _test_stringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    TSON.createStringify<TemplateAtomic>(),
);
