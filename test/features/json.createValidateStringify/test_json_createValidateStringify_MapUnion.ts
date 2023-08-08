import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_validateStringify_MapUnion =
    _test_json_validateStringify(
        "MapUnion",
        MapUnion.generate,
        typia.json.createValidateStringify<MapUnion>(),
        MapUnion.SPOILERS,
    );
