import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_validateEquals_ObjectHierarchical =
    _test_validateEquals<ObjectHierarchical>(ObjectHierarchical)((input) =>
        typia.validateEquals(input),
    );
