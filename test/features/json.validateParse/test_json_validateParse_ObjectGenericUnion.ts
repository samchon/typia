import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_validateParse_ObjectGenericUnion =
    _test_json_validateParse("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )((input) => typia.json.validateParse<ObjectGenericUnion>(input));
