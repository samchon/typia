import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_assertParse_ConstantAtomicSimple =
    _test_json_assertParse<ConstantAtomicSimple>(ConstantAtomicSimple)(
        (input) => typia.json.assertParse<ConstantAtomicSimple>(input),
    );
