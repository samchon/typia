import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_isStringify_ToJsonAtomicSimple =
    _test_json_isStringify<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
        typia.json.isStringify<ToJsonAtomicSimple>(input),
    );
