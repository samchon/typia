import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_isPrune_ObjectLiteralProperty = _test_isPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.isPrune(input),
    ObjectLiteralProperty.SPOILERS,
);
