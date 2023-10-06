import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createRandom_ObjectHttpUndefindable = _test_random(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    random: typia.createRandom<ObjectHttpUndefindable>(),
    assert: typia.createAssert<ObjectHttpUndefindable>(),
});
