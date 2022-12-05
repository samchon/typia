import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TemplateUnion = _test_isParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.isParse<TemplateUnion>(input),
    TemplateUnion.SPOILERS,
);
