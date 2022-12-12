import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ToJsonUnion = _test_equals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createEquals<ToJsonUnion>(),
);
