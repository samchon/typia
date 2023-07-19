import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_validateEquals_ObjectLiteralProperty =
    _test_validateEquals<ObjectLiteralProperty>(ObjectLiteralProperty)(
        (input) => typia.validateEquals(input),
    );
