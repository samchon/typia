import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_literal_type = _test_validate(
    "literal propertized object",
    () => ObjectLiteralType,
    TSON.createValidate<typeof ObjectLiteralType>(),
);
