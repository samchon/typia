import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_stringify_ToJsonAtomicSimple = _test_json_stringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.json.stringify(input),
);
