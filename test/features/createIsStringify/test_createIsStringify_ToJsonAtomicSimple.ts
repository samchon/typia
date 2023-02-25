import typia from "../../../src";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonAtomicSimple = _test_isStringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createIsStringify<ToJsonAtomicSimple>(),
);
