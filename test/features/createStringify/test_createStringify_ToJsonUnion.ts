import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createStringify_ToJsonUnion = _test_stringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createStringify<ToJsonUnion>(),
);
