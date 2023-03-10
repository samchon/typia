import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_message_ObjectHierarchical = _test_message(
    "ObjectHierarchical",
    typia.message<ObjectHierarchical>(),
);
