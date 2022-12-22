import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_SetAlias = _test_stringify(
    "SetAlias",
    SetAlias.generate,
    typia.createStringify<SetAlias>(),
);
