import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_validateClone_ToJsonUnion = _test_validateClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.validateClone<ToJsonUnion>(input),
);
