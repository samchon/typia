import typia from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicComposite = 
    _test_application("ajv")(
        "DynamicComposite",
        typia.application<[DynamicComposite], "ajv">(),
    );