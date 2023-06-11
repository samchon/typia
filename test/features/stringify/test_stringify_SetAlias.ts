import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_stringify_SetAlias = _test_stringify(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.stringify(input),
);
