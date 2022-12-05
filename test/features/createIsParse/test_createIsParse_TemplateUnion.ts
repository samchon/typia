import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TemplateUnion = _test_isParse(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createIsParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
