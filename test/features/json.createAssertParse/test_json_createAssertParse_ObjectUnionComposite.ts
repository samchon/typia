import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_assertParse_ObjectUnionComposite =
    _test_json_assertParse("ObjectUnionComposite")<ObjectUnionComposite>(
        ObjectUnionComposite,
    )(typia.json.createAssertParse<ObjectUnionComposite>());
