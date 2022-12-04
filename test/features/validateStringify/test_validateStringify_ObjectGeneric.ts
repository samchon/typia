import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectGeneric = _test_validateStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.validateStringify(input),
    ObjectGeneric.SPOILERS,
);
