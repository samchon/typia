import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_assertStringify_ConstantAtomicSimple =
    _test_json_assertStringify<ConstantAtomicSimple>(ConstantAtomicSimple)(
        (input) => typia.json.assertStringify<ConstantAtomicSimple>(input),
    );
