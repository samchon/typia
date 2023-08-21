import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_validateStringify_ObjectAlias =
    _test_json_validateStringify("ObjectAlias")<ObjectAlias>(ObjectAlias)(
        (input) => typia.json.validateStringify<ObjectAlias>(input),
    );
