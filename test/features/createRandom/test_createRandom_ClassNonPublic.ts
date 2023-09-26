import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createRandom_ClassNonPublic = _test_random(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    random: typia.createRandom<ClassNonPublic>(),
    assert: typia.createAssert<ClassNonPublic>(),
});
