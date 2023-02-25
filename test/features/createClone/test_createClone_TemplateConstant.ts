import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TemplateConstant = _test_clone(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createClone<TemplateConstant>(),
);
