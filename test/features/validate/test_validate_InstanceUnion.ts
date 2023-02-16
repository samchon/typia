import typia from "typia";

import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_InstanceUnion = _test_validate(
    "InstanceUnion",
    InstanceUnion.generate,
    (input) => typia.validate(input),
);
