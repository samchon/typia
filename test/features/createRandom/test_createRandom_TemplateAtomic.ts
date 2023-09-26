import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createRandom_TemplateAtomic = _test_random(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    random: typia.createRandom<TemplateAtomic>(),
    assert: typia.createAssert<TemplateAtomic>(),
});
