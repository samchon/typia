import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_literal_type =
    _test_assert_clone(
        "object literal",
        () => ObjectLiteralType,
        TSON.createAssertClone<typeof ObjectLiteralType>(),
    );
