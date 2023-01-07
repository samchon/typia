import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectUnionDouble = _test_validateStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateStringify(input),
    ObjectUnionDouble.SPOILERS,
);