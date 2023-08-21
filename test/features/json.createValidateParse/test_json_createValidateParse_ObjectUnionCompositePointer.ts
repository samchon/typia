import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_validateParse_ObjectUnionCompositePointer =
    _test_json_validateParse(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
        typia.json.createValidateParse<ObjectUnionCompositePointer>(),
    );
