import typia from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_random } from "../internal/_test_random";

export const test_random_TemplateConstant = _test_random(
    "TemplateConstant",
    () => typia.random<TemplateConstant>(),
    typia.createAssert<TemplateConstant>(),
);
