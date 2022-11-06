import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_clone } from "./_test_clone";

export const test_clone_object_literal_type = _test_clone(
    "object literal",
    () => ObjectLiteralType,
    (input) => TSON.clone(input),
);
