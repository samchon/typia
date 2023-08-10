import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_validateParse_ObjectUnionExplicitPointer =
    _test_json_validateParse<ObjectUnionExplicitPointer>(
        ObjectUnionExplicitPointer,
    )(typia.json.createValidateParse<ObjectUnionExplicitPointer>());
