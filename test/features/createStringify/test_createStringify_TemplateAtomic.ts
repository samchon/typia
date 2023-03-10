import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createStringify_TemplateAtomic = _test_stringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createStringify<TemplateAtomic>(),
);
