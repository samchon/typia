import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectInternal = _test_validateStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.validateStringify(input),
    ObjectInternal.SPOILERS,
);
