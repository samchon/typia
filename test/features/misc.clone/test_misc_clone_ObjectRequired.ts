import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_clone_ObjectRequired = _test_misc_clone(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    typia.misc.clone<ObjectRequired>(input),
);
