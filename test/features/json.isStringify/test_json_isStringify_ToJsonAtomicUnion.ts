import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_isStringify_ToJsonAtomicUnion = _test_json_isStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.json.isStringify(input),
);
