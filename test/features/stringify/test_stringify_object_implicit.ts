import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_implicit(): void {
    const lecture: ILecture = {
        name: RandomGenerator.string(),
        professor: RandomGenerator.string(),
        grade: RandomGenerator.integer(),
    };
    const json: string = TSON.stringify(lecture);
    const expected: string = JSON.stringify(lecture);

    if (expected !== json)
        throw new Error(
            `Bug on TSON.stringify(): failed to understand the implicit object.`,
        );
}

interface ILecture {
    name: string;
    professor?: string | number;
    grade: number | undefined;
}
