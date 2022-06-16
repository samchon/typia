import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IObjectToJsonAtomic } from "../../structures/ToJsonAtomic";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_to_json_to_atomic(): void {
    _test_stringify<IObjectToJsonAtomic<boolean>>(
        "toJSON() returning boolean type",
        IObjectToJsonAtomic.generate(RandomGenerator.boolean()),
        (input) => TSON.stringify(input),
    )();

    _test_stringify<IObjectToJsonAtomic<number>>(
        "toJSON() returning number type",
        IObjectToJsonAtomic.generate(RandomGenerator.number()),
        (input) => TSON.stringify(input),
    )();

    _test_stringify<IObjectToJsonAtomic<string>>(
        "toJSON() returning string type",
        IObjectToJsonAtomic.generate(RandomGenerator.string()),
        (input) => TSON.stringify(input),
    )();
}
