import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_stringify_ArrayAtomicSimple = _test_json_stringify(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.json.stringify<ArrayAtomicSimple>(input),
);
