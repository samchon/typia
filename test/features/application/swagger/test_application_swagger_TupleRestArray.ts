import typia from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleRestArray = _test_application(
    "swagger",
)("TupleRestArray", typia.application<[TupleRestArray], "swagger">());
