import TSON from "../../src";

export function test_stringify_object_generic(): void
{
    const something: ISomething<string> = {
        value: "value",
        child: {
            child_value: "child_value",
            child_next: "child_next"
        },
        elements: [
            { child_value: "one", child_next: "one" }, 
            { child_value: "two", child_next: "two" },
            { child_value: "three", child_next: "three" },
        ],
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
    elements: IChild<T>[];
}
interface IChild<V, N = V>
{
    child_value: V;
    child_next: N;
}