import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TemplateUnion = _test_equals(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createEquals<TemplateUnion>(),
);