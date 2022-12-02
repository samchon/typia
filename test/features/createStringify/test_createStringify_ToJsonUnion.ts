import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ToJsonUnion = _test_stringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createStringify<ToJsonUnion>(),
);
