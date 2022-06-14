import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IObjectToJsonArray } from "../../structures/IObjectToJsonArray";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_to_json_to_array(): void {
    _test_stringify(
        "toJSON() method returning boolean array type",
        IObjectToJsonArray.generate(RandomGenerator.boolean),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "toJSON() method returning number array type",
        IObjectToJsonArray.generate(RandomGenerator.number),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "toJSON() method returning string array type",
        IObjectToJsonArray.generate(RandomGenerator.string),
        (input) => TSON.stringify(input),
    )();
}
