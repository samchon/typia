import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_json_validateStringify_SetAlias =
    _test_json_validateStringify("SetAlias")<SetAlias>(SetAlias)((input) =>
        typia.json.validateStringify<SetAlias>(input),
    );
