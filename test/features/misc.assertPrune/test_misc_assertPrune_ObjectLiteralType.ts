import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_assertPrune_ObjectLiteralType =
    _test_misc_assertPrune<ObjectLiteralType>(ObjectLiteralType)((input) =>
        typia.misc.assertPrune(input),
    );
