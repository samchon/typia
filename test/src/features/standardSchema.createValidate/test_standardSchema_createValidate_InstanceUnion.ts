import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_standardSchema_createValidate_InstanceUnion = _test_standardSchema_validate(
    "InstanceUnion",
)<InstanceUnion>(
    InstanceUnion
)(typia.createValidate<InstanceUnion>());
