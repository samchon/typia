import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TemplateUnion = _test_clone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => TSON.clone(input),
);
