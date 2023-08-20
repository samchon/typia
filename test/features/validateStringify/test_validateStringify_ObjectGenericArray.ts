import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validateStringify_ObjectGenericArray =
    _test_validateStringify(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        (input) => typia.validateStringify<ObjectGenericArray>(input),
        ObjectGenericArray.SPOILERS,
    );
