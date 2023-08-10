import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_random_ObjectGenericUnion = _test_random<ObjectGenericUnion>(
    ObjectGenericUnion,
)({
    random: () => typia.random<ObjectGenericUnion>(),
    assert: typia.createAssert<ObjectGenericUnion>(),
});
