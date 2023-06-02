import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createEquals_ToJsonUnion = _test_equals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createEquals<ToJsonUnion>(),
);
