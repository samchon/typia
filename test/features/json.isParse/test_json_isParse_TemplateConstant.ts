import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_isParse_TemplateConstant = _test_json_isParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.json.isParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
