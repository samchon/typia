import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_validateParse_ConstantAtomicSimple = _test_json_validateParse(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(
    ConstantAtomicSimple
)((input) => typia.json.validateParse<ConstantAtomicSimple>(input));
