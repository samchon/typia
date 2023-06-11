import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createStringify_ToJsonAtomicUnion = _test_stringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createStringify<ToJsonAtomicUnion>(),
);
