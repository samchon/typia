import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_random } from "../../internal/_test_random";

export const test_random_TemplateAtomic = _test_random(
    "TemplateAtomic",
    () => typia.random<TemplateAtomic>(),
typia.createAssert<typia.Primitive<TemplateAtomic>>(),
);
