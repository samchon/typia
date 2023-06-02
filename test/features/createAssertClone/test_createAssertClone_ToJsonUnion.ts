import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertClone_ToJsonUnion = _test_assertClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertClone<ToJsonUnion>(),
);
