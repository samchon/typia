import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createRandom_ClassGetter = _test_random(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    random: typia.createRandom<ClassGetter>(),
    assert: typia.createAssert<ClassGetter>(),
});
