import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_assertClone_ObjectLiteralType =
    _test_misc_assertClone<ObjectLiteralType>(ObjectLiteralType)(
        typia.misc.createAssertClone<ObjectLiteralType>(),
    );
