import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_validateStringify_DynamicUnion =
    _test_json_validateStringify("DynamicUnion")<DynamicUnion>(DynamicUnion)(
        typia.json.createValidateStringify<DynamicUnion>(),
    );
