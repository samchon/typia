import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_validateParse_ObjectGenericAlias =
    _test_json_validateParse("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )((input) => typia.json.validateParse<ObjectGenericAlias>(input));
