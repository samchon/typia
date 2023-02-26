import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createValidateParse_ObjectInternal = _test_validateParse(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidateParse<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
