import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_validateEquals_TagArrayUnion =
    _test_validateEquals<TagArrayUnion>(TagArrayUnion)((input) =>
        typia.validateEquals<TagArrayUnion>(input),
    );
