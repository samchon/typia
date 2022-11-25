import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ToJsonAtomicUnion = _test_stringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    TSON.createStringify<ToJsonAtomicUnion>(),
);
