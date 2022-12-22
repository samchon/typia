import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectPropertyNullable = _test_message(
    "ObjectPropertyNullable",
    typia.message<ObjectPropertyNullable>(),
);