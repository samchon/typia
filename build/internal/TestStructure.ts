import { Spoiler } from "../../test/helpers/Spoiler";

export interface TestStructure<T> {
    name: string;
    generate?(): T;
    SPOILERS?: Spoiler<T>[];
    ADDABLE?: boolean;
    JSONABLE?: boolean;
    PRIMITIVE?: boolean;
}
