import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUndefined = _test_validateStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => TSON.validateStringify(input),
    ObjectUndefined.SPOILERS,
);
