import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createValidateParse_TypeTagMatrix =
    _test_json_validateParse("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
        typia.json.createValidateParse<TypeTagMatrix>(),
    );
