import { Spoiler } from "../internal/Spoiler";

export interface TestStructure<T> {
    name: string;
    generate?(): T;
    SPOILERS?: Spoiler<T>[];
    ADDABLE?: boolean;
    JSONABLE?: boolean;
    PRIMITIVE?: boolean;
}
