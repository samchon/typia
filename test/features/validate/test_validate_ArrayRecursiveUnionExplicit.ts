import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_validate_ArrayRecursiveUnionExplicit =
    _test_validate<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        (input) => typia.validate<ArrayRecursiveUnionExplicit>(input),
    );
