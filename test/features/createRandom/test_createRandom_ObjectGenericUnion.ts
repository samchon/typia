import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createRandom_ObjectGenericUnion = _test_random("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion
)({
    random: typia.createRandom<ObjectGenericUnion>(),
    assert: typia.createAssert<ObjectGenericUnion>(),
});
