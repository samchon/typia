import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertStringify_ToJsonUnion = _test_assertStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.assertStringify<ToJsonUnion>(input),
);
