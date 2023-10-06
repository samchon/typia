import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createIsStringify_ArrayAtomicSimple =
    _test_json_isStringify("ArrayAtomicSimple")<ArrayAtomicSimple>(
        ArrayAtomicSimple,
    )(typia.json.createIsStringify<ArrayAtomicSimple>());
