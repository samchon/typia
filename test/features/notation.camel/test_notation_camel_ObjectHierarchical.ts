import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_validateCamel_ObjectHierarchical =
    _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )<typia.CamelCase<ObjectHierarchical>>({
        convert: (input) =>
            typia.notations.validateCamel<ObjectHierarchical>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectHierarchical>>(),
    });
