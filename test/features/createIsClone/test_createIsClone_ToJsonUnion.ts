import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ToJsonUnion = _test_isClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createIsClone<ToJsonUnion>(),
);