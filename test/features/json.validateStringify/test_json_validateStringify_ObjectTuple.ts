import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_validateStringify_ObjectTuple =
    _test_json_validateStringify(
        "ObjectTuple",
        ObjectTuple.generate,
        (input) => typia.json.validateStringify(input),
        ObjectTuple.SPOILERS,
    );
