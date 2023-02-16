import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TemplateUnion = _test_random(
    "TemplateUnion",
    typia.createRandom<TemplateUnion>(),
    typia.createAssert<typia.Primitive<TemplateUnion>>(),
);
