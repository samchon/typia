import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ToJsonUnion = _test_assertStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => TSON.assertStringify(input),
);
