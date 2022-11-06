import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_literal_type = _test_is_clone(
    "object literal",
    () => ObjectLiteralType,
    (input) => TSON.isClone(input),
);
