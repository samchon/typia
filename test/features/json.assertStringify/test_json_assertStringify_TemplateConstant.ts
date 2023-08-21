import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_assertStringify_TemplateConstant =
    _test_json_assertStringify("TemplateConstant")<TemplateConstant>(
        TemplateConstant,
    )((input) => typia.json.assertStringify<TemplateConstant>(input));
