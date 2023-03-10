import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createIsClone_ToJsonAtomicUnion = _test_isClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createIsClone<ToJsonAtomicUnion>(),
);
