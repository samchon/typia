import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_validateStringify_ArrayUnion =
    _test_json_validateStringify("ArrayUnion")<ArrayUnion>(ArrayUnion)(
        typia.json.createValidateStringify<ArrayUnion>(),
    );
