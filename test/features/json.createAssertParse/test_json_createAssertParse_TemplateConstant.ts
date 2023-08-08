import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_assertParse_TemplateConstant = _test_json_assertParse(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.json.createAssertParse<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
