import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_validateStringify_MapSimple =
    _test_json_validateStringify<MapSimple>(MapSimple)((input) =>
        typia.json.validateStringify<MapSimple>(input),
    );
