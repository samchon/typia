import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createRandom_TemplateAtomic = _test_random(
    "TemplateAtomic",
    typia.createRandom<TemplateAtomic>(),
    typia.createAssert<typia.Primitive<TemplateAtomic>>(),
);
