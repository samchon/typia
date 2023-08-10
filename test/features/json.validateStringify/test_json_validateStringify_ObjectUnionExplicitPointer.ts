import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_validateStringify_ObjectUnionExplicitPointer =
    _test_json_validateStringify<ObjectUnionExplicitPointer>(
        ObjectUnionExplicitPointer,
    )((input) =>
        typia.json.validateStringify<ObjectUnionExplicitPointer>(input),
    );
