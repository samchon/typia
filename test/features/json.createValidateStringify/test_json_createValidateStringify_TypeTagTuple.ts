import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_validateStringify_TypeTagTuple =
    _test_json_validateStringify("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
        typia.json.createValidateStringify<TypeTagTuple>(),
    );
