import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_is_TemplateConstant = _test_is<TemplateConstant>(
    TemplateConstant,
)((input) => typia.is(input));
