import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_validateStringify_ArrayAtomicAlias =
    _test_json_validateStringify(
        "ArrayAtomicAlias",
        ArrayAtomicAlias.generate,
        typia.json.createValidateStringify<ArrayAtomicAlias>(),
        ArrayAtomicAlias.SPOILERS,
    );
