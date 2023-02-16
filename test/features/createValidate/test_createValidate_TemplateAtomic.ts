import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TemplateAtomic = _test_validate(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidate<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
