import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_stringify_ConstantAtomicUnion = _test_json_stringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.json.stringify(input),
);
