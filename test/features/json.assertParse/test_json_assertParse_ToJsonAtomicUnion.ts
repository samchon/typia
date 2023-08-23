import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_assertParse_ToJsonAtomicUnion = _test_json_assertParse(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    typia.json.assertParse<ToJsonAtomicUnion>(input),
);
