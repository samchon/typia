import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_message_ObjectPropertyNullable = _test_message(
    "ObjectPropertyNullable",
    typia.message<ObjectPropertyNullable>(),
);
