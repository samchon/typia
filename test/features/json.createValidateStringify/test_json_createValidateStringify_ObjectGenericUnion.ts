import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_validateStringify_ObjectGenericUnion =
    _test_json_validateStringify<ObjectGenericUnion>(ObjectGenericUnion)(
        typia.json.createValidateStringify<ObjectGenericUnion>(),
    );
