import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_validateEquals_ArrayRecursiveUnionExplicit =
    _test_validateEquals<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )(typia.createValidateEquals<ArrayRecursiveUnionExplicit>());
