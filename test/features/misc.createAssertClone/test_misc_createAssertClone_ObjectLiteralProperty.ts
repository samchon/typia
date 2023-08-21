import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_assertClone_ObjectLiteralProperty =
    _test_misc_assertClone("ObjectLiteralProperty")<ObjectLiteralProperty>(
        ObjectLiteralProperty,
    )(typia.misc.createAssertClone<ObjectLiteralProperty>());
