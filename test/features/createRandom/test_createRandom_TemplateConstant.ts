import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TemplateConstant = _test_random(
    "TemplateConstant",
    typia.createRandom<TemplateConstant>(),
    typia.createAssert<typia.Primitive<TemplateConstant>>(),
);
