import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_validateStringify_TypeTagFormat =
    _test_json_validateStringify("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
        (input) => typia.json.validateStringify<TypeTagFormat>(input),
    );
