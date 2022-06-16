import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_typeof(): void {
    const section: ISection = {
        code: RandomGenerator.string(),
        name: RandomGenerator.string(),
    };
    const json: string = TSON.stringify<typeof section>(section);
    if (Primitive.equal_to(JSON.parse(json), section) === false)
        throw new Error(
            `Bug on TSON.stringify(): failed to understand the typeof statement.`,
        );
}

interface ISection {
    code: string;
    name: string;
}
