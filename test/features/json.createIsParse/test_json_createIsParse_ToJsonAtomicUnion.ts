import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_isParse_ToJsonAtomicUnion = _test_json_isParse(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.json.createIsParse<ToJsonAtomicUnion>(),
);
