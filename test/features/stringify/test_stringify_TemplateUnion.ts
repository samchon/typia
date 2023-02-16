import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TemplateUnion = _test_stringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.stringify(input),
);
