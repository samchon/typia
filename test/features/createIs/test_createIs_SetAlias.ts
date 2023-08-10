import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { SetAlias } from "../../structures/SetAlias";

export const test_is_SetAlias = _test_is<SetAlias>(SetAlias)(
    typia.createIs<SetAlias>(),
);
