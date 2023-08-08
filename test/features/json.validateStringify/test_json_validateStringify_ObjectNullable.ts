import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_validateStringify_ObjectNullable =
    _test_json_validateStringify(
        "ObjectNullable",
        ObjectNullable.generate,
        (input) => typia.json.validateStringify(input),
        ObjectNullable.SPOILERS,
    );
