import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_createValidate_InstanceUnion = (): void => _test_validate(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createValidate<InstanceUnion>());
