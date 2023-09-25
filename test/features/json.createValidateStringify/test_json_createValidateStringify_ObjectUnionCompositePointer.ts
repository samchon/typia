import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createValidateStringify_ObjectUnionCompositePointer =
    _test_json_validateStringify(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
        typia.json.createValidateStringify<ObjectUnionCompositePointer>(),
    );
