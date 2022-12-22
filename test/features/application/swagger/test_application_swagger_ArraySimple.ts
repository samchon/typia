import typia from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArraySimple = 
    _test_application("swagger")(
        "ArraySimple",
        typia.application<[ArraySimple], "swagger">(),
    );