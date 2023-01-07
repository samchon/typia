import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagLength = 
    _test_application("swagger")(
        "TagLength",
        typia.application<[TagLength], "swagger">(),
    );