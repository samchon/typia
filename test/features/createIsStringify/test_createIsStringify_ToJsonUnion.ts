import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ToJsonUnion = _test_isStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createIsStringify<ToJsonUnion>(),
);