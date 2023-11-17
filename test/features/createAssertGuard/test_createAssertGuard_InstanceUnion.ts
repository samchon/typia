import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_createAssertGuard_InstanceUnion = _test_assertGuard(
    "InstanceUnion",
)<InstanceUnion>(InstanceUnion)(typia.createAssertGuard<InstanceUnion>());
