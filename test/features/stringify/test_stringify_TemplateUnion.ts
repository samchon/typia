import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_stringify_TemplateUnion = _test_stringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.stringify<TemplateUnion>(input),
);
