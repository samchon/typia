import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_isParse_ObjectUnionExplicitPointer =
    _test_json_isParse<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        (input) => typia.json.isParse<ObjectUnionExplicitPointer>(input),
    );
