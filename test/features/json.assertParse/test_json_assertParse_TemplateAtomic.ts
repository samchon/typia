import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_assertParse_TemplateAtomic = _test_json_assertParse(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.json.assertParse<TemplateAtomic>(input),
    TemplateAtomic.SPOILERS,
);
