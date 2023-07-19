import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_is_ArrayRecursiveUnionExplicit =
    _test_is<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        (input) => typia.is(input),
    );
