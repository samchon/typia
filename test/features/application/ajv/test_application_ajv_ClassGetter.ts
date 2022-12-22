import typia from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassGetter = _test_application("ajv")(
    "ClassGetter",
    typia.application<[ClassGetter], "ajv">(),
);
