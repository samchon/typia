import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_random_ObjectGenericAlias = _test_random<ObjectGenericAlias>(
    ObjectGenericAlias,
)({
    random: typia.createRandom<ObjectGenericAlias>(),
    assert: typia.createAssert<ObjectGenericAlias>(),
});
