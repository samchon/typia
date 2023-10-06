import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_createValidateStringify_MapAlias =
    _test_json_validateStringify("MapAlias")<MapAlias>(MapAlias)(
        typia.json.createValidateStringify<MapAlias>(),
    );
