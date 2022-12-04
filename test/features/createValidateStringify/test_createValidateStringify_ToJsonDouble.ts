import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonDouble =
    _test_validateStringify(
        "ToJsonDouble",
        ToJsonDouble.generate,
        TSON.createValidateStringify<ToJsonDouble>(),
    );
