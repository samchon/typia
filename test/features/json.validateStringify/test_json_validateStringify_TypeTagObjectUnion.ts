import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_validateStringify_TypeTagObjectUnion =
    _test_json_validateStringify("TypeTagObjectUnion")<TypeTagObjectUnion>(
        TypeTagObjectUnion,
    )((input) => typia.json.validateStringify<TypeTagObjectUnion>(input));
