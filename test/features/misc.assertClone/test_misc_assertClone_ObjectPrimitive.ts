import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_assertClone_ObjectPrimitive =
    _test_misc_assertClone<ObjectPrimitive>(ObjectPrimitive)((input) =>
        typia.misc.assertClone(input),
    );
