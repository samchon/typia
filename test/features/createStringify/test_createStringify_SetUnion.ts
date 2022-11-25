import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_SetUnion = _test_stringify(
    "SetUnion",
    SetUnion.generate,
    TSON.createStringify<SetUnion>(),
);