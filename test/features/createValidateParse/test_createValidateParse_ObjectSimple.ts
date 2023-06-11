import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createValidateParse_ObjectSimple = _test_validateParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createValidateParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
