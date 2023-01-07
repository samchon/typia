import typia from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectSimple = 
    _test_application("ajv")(
        "ObjectSimple",
        typia.application<[ObjectSimple], "ajv">(),
    );