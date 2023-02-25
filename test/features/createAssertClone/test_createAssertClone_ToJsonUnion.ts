import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ToJsonUnion = _test_assertClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertClone<ToJsonUnion>(),
);
