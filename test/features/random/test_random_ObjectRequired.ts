import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_random_ObjectRequired = _test_random(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
    random: () => typia.random<ObjectRequired>((ObjectRequired as any).RANDOM),
    assert: typia.createAssert<ObjectRequired>(),
});
