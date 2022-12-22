import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionComposite = _test_message(
    "ObjectUnionComposite",
    typia.message<ObjectUnionComposite>(),
);