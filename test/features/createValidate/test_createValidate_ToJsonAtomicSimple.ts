import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_validate_ToJsonAtomicSimple = _test_validate(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.createValidate<ToJsonAtomicSimple>(),
);
