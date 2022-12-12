import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectInternal = _test_validateParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validateParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);