import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_SetAlias = _test_clone(
    "SetAlias",
    SetAlias.generate,
    typia.createClone<SetAlias>(),
);