import typia from "../../../../src";
import { ClassClosure } from "../../../structures/ClassClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassClosure = 
    _test_application("swagger")(
        "ClassClosure",
        typia.application<[ClassClosure], "swagger">(),
    );