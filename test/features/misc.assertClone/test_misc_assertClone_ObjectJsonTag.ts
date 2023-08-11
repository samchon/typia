import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_assertClone_ObjectJsonTag =
    _test_misc_assertClone<ObjectJsonTag>(ObjectJsonTag)((input) =>
        typia.misc.assertClone<ObjectJsonTag>(input),
    );
