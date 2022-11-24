import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_template_union = _test_is_clone(
    "template union",
    TemplateUnion.generate,
    TSON.createIsClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
