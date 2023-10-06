import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createIsClone_ObjectUndefined = _test_misc_isClone(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
    typia.misc.createIsClone<ObjectUndefined>(),
);
