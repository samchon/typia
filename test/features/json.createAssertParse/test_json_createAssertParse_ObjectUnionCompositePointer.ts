import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_assertParse_ObjectUnionCompositePointer =
    _test_json_assertParse<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer,
    )(typia.json.createAssertParse<ObjectUnionCompositePointer>());
