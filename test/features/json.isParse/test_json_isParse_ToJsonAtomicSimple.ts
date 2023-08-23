import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_isParse_ToJsonAtomicSimple = _test_json_isParse(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
    typia.json.isParse<ToJsonAtomicSimple>(input),
);
