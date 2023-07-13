import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_validateStringify_ObjectPrimitive =
    _test_json_validateStringify(
        "ObjectPrimitive",
        ObjectPrimitive.generate,
        (input) => typia.json.validateStringify(input),
        ObjectPrimitive.SPOILERS,
    );
