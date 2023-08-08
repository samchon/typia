import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_validateStringify_ObjectOptional =
    _test_json_validateStringify(
        "ObjectOptional",
        ObjectOptional.generate,
        (input) => typia.json.validateStringify(input),
        ObjectOptional.SPOILERS,
    );
