import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_FunctionalProperty = _test_stringify(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createStringify<FunctionalProperty>(),
);
