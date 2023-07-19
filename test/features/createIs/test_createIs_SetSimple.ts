import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { SetSimple } from "../../structures/SetSimple";

export const test_is_SetSimple = _test_is<SetSimple>(SetSimple)(
    typia.createIs<SetSimple>(),
);
