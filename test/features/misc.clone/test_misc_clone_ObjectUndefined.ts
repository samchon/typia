import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_clone_ObjectUndefined =
    _test_misc_clone<ObjectUndefined>(ObjectUndefined)((input) =>
        typia.misc.clone<ObjectUndefined>(input),
    );
