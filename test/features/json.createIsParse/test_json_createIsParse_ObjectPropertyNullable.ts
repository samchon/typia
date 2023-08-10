import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_isParse_ObjectPropertyNullable =
    _test_json_isParse<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.json.createIsParse<ObjectPropertyNullable>(),
    );
