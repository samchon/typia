import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_equals_ToJsonUnion = _test_equals<ToJsonUnion>(ToJsonUnion)(
    (input) => typia.equals(input),
);
