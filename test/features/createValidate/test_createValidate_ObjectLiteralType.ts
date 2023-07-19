import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_validate_ObjectLiteralType =
    _test_validate<ObjectLiteralType>(ObjectLiteralType)(
        typia.createValidate<ObjectLiteralType>(),
    );
