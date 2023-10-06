import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_createIsParse_ConstantAtomicSimple = _test_json_isParse(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.json.createIsParse<ConstantAtomicSimple>(),
);
