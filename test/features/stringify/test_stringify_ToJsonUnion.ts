import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_stringify_ToJsonUnion = _test_stringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.stringify<ToJsonUnion>(input),
);
