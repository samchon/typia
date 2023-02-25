import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TemplateUnion = _test_stringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createStringify<TemplateUnion>(),
);
