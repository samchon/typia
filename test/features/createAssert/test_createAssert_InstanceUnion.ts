import typia from "../../../src";
import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_InstanceUnion = _test_assert(
    "InstanceUnion",
    InstanceUnion.generate,
    typia.createAssert<InstanceUnion>(),
);