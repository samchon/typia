import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TemplateAtomic = _test_random(
    "TemplateAtomic",
    typia.createRandom<TemplateAtomic>(),
    typia.createAssert<typia.Primitive<TemplateAtomic>>(),
);
