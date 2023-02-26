import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createRandom_TemplateUnion = _test_random(
    "TemplateUnion",
    typia.createRandom<TemplateUnion>(),
    typia.createAssert<TemplateUnion>(),
);
