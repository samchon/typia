import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TemplateAtomic = _test_clone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createClone<TemplateAtomic>(),
);
