import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_createStringify_TypeTagAtomicUnion =
    _test_json_stringify("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )(typia.json.createStringify<TypeTagAtomicUnion>());
