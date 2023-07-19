import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_equals_ObjectHierarchical = _test_equals<ObjectHierarchical>(
    ObjectHierarchical,
)(typia.createEquals<ObjectHierarchical>());
