import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_validateStringify_TypeTagType =
    _test_json_validateStringify("TypeTagType")<TypeTagType>(TypeTagType)(
        (input) => typia.json.validateStringify<TypeTagType>(input),
    );
