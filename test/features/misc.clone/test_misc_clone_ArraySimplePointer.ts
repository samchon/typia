import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_misc_clone_ArraySimplePointer =
    _test_misc_clone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.misc.clone<ArraySimplePointer>(input),
    );
