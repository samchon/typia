import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_assertClone_ObjectRequired = _test_misc_assertClone(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    typia.misc.assertClone<ObjectRequired>(input),
);
