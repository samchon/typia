import typia from "../../../src";

import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_InstanceUnion = _test_is(
    "InstanceUnion",
    InstanceUnion.generate,
    (input) => typia.is(input),
);
