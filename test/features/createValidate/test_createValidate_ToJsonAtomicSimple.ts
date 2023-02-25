import typia from "../../../src";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonAtomicSimple = _test_validate(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createValidate<ToJsonAtomicSimple>(),
);
