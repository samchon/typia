import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectHierarchical = _test_message(
    "ObjectHierarchical",
    typia.message<ObjectHierarchical>(),
);