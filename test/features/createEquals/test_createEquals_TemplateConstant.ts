import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TemplateConstant = _test_equals(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createEquals<TemplateConstant>(),
);