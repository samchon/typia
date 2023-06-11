import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createValidateClone_ObjectUndefined = _test_validateClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidateClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
