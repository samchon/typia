import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_isPrune_ObjectLiteralType =
    _test_misc_isPrune<ObjectLiteralType>(ObjectLiteralType)((input) =>
        typia.misc.isPrune<ObjectLiteralType>(input),
    );
