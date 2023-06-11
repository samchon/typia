import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createIs_ToJsonAtomicSimple = _test_is(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createIs<ToJsonAtomicSimple>(),
);
