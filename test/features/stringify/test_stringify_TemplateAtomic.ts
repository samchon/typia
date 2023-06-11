import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_TemplateAtomic = _test_stringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.stringify(input),
);
