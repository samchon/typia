import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createIs_ToJsonUnion = _test_is(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createIs<ToJsonUnion>(),
);
