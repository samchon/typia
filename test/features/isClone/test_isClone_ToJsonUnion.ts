import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_isClone_ToJsonUnion = _test_isClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.isClone<ToJsonUnion>(input),
);
