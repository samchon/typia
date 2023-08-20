import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_is_ToJsonUnion = _test_is(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.is<ToJsonUnion>(input),
);
