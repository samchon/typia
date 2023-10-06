import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createIsStringify_TypeTagArrayUnion =
    _test_json_isStringify("TypeTagArrayUnion")<TypeTagArrayUnion>(
        TypeTagArrayUnion,
    )(typia.json.createIsStringify<TypeTagArrayUnion>());
