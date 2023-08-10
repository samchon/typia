import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_validateParse_TagAtomicUnion =
    _test_json_validateParse<TagAtomicUnion>(TagAtomicUnion)(
        typia.json.createValidateParse<TagAtomicUnion>(),
    );
