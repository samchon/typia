import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_intersection(): void {
    const input: IEmail & IName = {
        email: RandomGenerator.string(),
        name: RandomGenerator.string(),
        vulnerable: RandomGenerator.boolean(),
    };
    const json: string = TSON.stringify<IEmail & IName>(input);
    if (Primitive.equal_to(JSON.parse(json), input) === false)
        throw new Error(
            `Bug on TSON.stringify(): failed to understand the object intersection type.`,
        );
}

interface IEmail {
    email: string;
}
interface IName {
    name: string;
    vulnerable: boolean;
}
