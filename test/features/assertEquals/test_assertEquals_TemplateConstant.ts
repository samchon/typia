import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertEquals_TemplateConstant = _test_assertEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.assertEquals(input),
);
