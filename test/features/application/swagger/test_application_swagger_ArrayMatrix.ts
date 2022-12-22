import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayMatrix = _test_application(
    "swagger",
)("ArrayMatrix", typia.application<[ArrayMatrix], "swagger">());
