import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_isStringify_TemplateAtomic = _test_json_isStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.json.createIsStringify<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
