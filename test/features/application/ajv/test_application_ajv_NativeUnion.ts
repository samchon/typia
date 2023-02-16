import typia from "typia"
import { NativeUnion } from "../../../structures/NativeUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_NativeUnion = 
    _test_application("ajv")(
        "NativeUnion",
        typia.application<[NativeUnion], "ajv">(),
    );