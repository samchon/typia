import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_random_ObjectHttpAtomic = _test_random(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
    random: () => typia.random<ObjectHttpAtomic>(),
    assert: typia.createAssert<ObjectHttpAtomic>(),
});
