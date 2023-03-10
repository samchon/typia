import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_message_ObjectUnionComposite = _test_message(
    "ObjectUnionComposite",
    typia.message<ObjectUnionComposite>(),
);
