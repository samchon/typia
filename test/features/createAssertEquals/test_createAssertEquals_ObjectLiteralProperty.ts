import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_assertEquals_ObjectLiteralProperty =
    _test_assertEquals<ObjectLiteralProperty>(ObjectLiteralProperty)(
        typia.createAssertEquals<ObjectLiteralProperty>(),
    );
