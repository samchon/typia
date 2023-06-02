import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createValidateParse_ObjectUndefined = _test_validateParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidateParse<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
