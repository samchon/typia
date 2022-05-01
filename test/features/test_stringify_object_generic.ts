import TSON from "../../src";

export function test_stringify_object_generic_alias(): void
{
    const something: ISomething<string> = {
        value: "value",
        child: {
            child_value: "child_value",
            child_next: "child_next"
        },
        elements: ["one", "two", "three"],
    };
    const json: string = TSON.stringify<ISomething<string>>(something);
    const expected: string = JSON.stringify(something);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the generic object type.");
}

interface ISomething<T>
{
    value: T;
    child: IChild<T>;
    elements: T[];
}
interface IChild<U>
{
    child_value: U;
    child_next: U;
}