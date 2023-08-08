import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_validateStringify_ObjectGenericAlias =
    _test_json_validateStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        (input) => typia.json.validateStringify(input),
        ObjectGenericAlias.SPOILERS,
    );
