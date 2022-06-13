import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IObjectToJsonAtomic } from "../../structures/IObjectToJsonAtomic";
import { _test_stringify } from "./internal/_test_stringify";

export function test_stringify_to_json_to_atomic(): void {
    _test_stringify(
        "toJSON() returning boolean type",
        IObjectToJsonAtomic.generate(RandomGenerator.boolean),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "toJSON() returning number type",
        IObjectToJsonAtomic.generate(RandomGenerator.number),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "toJSON() returning string type",
        IObjectToJsonAtomic.generate(RandomGenerator.string),
        (input) => TSON.stringify(input),
    )();
}
