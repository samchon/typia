import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_clone_TemplateUnion = _test_clone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.clone(input),
);
