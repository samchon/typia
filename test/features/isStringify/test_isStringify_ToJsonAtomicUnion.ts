import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonAtomicUnion = _test_isStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => TSON.isStringify(input),
);