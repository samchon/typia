import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TemplateConstant = _test_stringify(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createStringify<TemplateConstant>(),
);
