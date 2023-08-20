import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validateStringify_ObjectUnionDouble = _test_validateStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateStringify<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
