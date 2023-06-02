import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { SetAlias } from "../../structures/SetAlias";

export const test_createClone_SetAlias = _test_clone(
    "SetAlias",
    SetAlias.generate,
    typia.createClone<SetAlias>(),
);
