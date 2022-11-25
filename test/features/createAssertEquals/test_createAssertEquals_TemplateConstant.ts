import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TemplateConstant = _test_assertEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createAssertEquals<TemplateConstant>(),
);