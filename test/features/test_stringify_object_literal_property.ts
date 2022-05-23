import TSON from "../../src";

export function test_stringify_object_literal_property()
{
    const property: ILiteralProperty = {
        "something-interesting-do-you-want?": "what's that",
        "or-something-crazy-do-you-want?": "nope"
    };
    const json: string = TSON.stringify(property);
    const expected: string = JSON.stringify(property);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the object literal property.");
}

interface ILiteralProperty
{
    "something-interesting-do-you-want?": string;
    ["or-something-crazy-do-you-want?"]: string;
}