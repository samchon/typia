import typia from "../../../../src";
import { ClassClosure } from "../../../structures/ClassClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassClosure = 
    _test_application("ajv")(
        "ClassClosure",
        typia.application<[ClassClosure], "ajv">(),
    );