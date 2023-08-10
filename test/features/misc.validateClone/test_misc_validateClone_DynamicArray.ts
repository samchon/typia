import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_validateClone_DynamicArray =
    _test_misc_validateClone<DynamicArray>(DynamicArray)((input) =>
        typia.misc.validateClone<DynamicArray>(input),
    );
