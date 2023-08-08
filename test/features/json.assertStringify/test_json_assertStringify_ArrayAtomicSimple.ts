import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_assertStringify_ArrayAtomicSimple =
    _test_json_assertStringify(
        "ArrayAtomicSimple",
        ArrayAtomicSimple.generate,
        (input) => typia.json.assertStringify(input),
        ArrayAtomicSimple.SPOILERS,
    );
