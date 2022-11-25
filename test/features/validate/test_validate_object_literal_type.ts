import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_literal_type = _test_validate(
    "literal propertized object",
    () => ObjectLiteralType,
    (input) => TSON.validate(input),
);
