import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createRandom_ObjectAlias = _test_random(
    "ObjectAlias",
)<ObjectAlias>(ObjectAlias)({
    random: typia.createRandom<ObjectAlias>(),
    assert: typia.createAssert<ObjectAlias>(),
});
