import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validate_ArrayRecursiveUnionImplicit =
    _test_validate<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
        (input) => typia.validate<ArrayRecursiveUnionImplicit>(input),
    );
