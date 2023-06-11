import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_createStringify_SetSimple = _test_stringify(
    "SetSimple",
    SetSimple.generate,
    typia.createStringify<SetSimple>(),
);
