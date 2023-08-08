import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_assertPrune_ObjectLiteralProperty =
    _test_misc_assertPrune(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        typia.misc.createAssertPrune<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
