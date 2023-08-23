import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_assertParse_ToJsonAtomicSimple = _test_json_assertParse(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
    typia.json.assertParse<ToJsonAtomicSimple>(input),
);
