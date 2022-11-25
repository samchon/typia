import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectLiteralType = _test_clone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) => TSON.clone(input),
);