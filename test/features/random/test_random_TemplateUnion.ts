import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_TemplateUnion = _test_random(
    "TemplateUnion",
    () => typia.random<TemplateUnion>(),
    typia.createAssert<typia.Primitive<TemplateUnion>>(),
);