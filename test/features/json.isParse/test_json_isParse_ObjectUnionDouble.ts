import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_isParse_ObjectUnionDouble =
    _test_json_isParse<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
        typia.json.isParse<ObjectUnionDouble>(input),
    );
