import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_validateStringify_ObjectGenericArray =
    _test_json_validateStringify(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        (input) => typia.json.validateStringify(input),
        ObjectGenericArray.SPOILERS,
    );
