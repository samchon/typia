import typia from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectClosure = 
    _test_application("swagger")(
        "ObjectClosure",
        typia.application<[ObjectClosure], "swagger">(),
    );