import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_random_TemplateConstant = _test_random(
    "TemplateConstant",
    typia.createRandom<TemplateConstant>(),
    typia.createAssert<typia.Primitive<TemplateConstant>>(),
);
