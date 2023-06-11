import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_createStringify_SetAlias = _test_stringify(
    "SetAlias",
    SetAlias.generate,
    typia.createStringify<SetAlias>(),
);
