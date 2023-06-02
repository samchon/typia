import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createValidateStringify_ToJsonDouble =
    _test_validateStringify(
        "ToJsonDouble",
        ToJsonDouble.generate,
        typia.createValidateStringify<ToJsonDouble>(),
    );
