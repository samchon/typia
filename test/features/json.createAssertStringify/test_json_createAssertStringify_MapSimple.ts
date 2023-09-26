import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_createAssertStringify_MapSimple =
    _test_json_assertStringify("MapSimple")<MapSimple>(MapSimple)(
        typia.json.createAssertStringify<MapSimple>(),
    );
