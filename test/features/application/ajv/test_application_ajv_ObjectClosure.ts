import typia from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectClosure = 
    _test_application("ajv")(
        "ObjectClosure",
        typia.application<[ObjectClosure], "ajv">(),
    );