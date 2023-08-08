import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_stringify_ToJsonAtomicUnion = _test_json_stringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.json.stringify(input),
);
