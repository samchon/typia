import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_validateEquals_ToJsonAtomicUnion = _test_validateEquals(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.createValidateEquals<ToJsonAtomicUnion>(),
);
