import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_literal_type = _test_clone(
    "object literal",
    () => ObjectLiteralType,
    TSON.createClone<typeof ObjectLiteralType>(),
);
