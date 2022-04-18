import TSON from "../../src";
import { Primitive } from "../internal/Primitive";

export function test_stringify_simple(): void
{
    const member: IMember = {
        id: "some-id",
        email: "someone@someone.com",
        name: "someone",
        sex: "male",
        age: null,
        dead: null,
    };
    const stringify: (input: IMember) => string = TSON.createStringifier<IMember>();
    
    const json: string = stringify(member);
    const parsed: IMember = JSON.parse(json);

    if (Primitive.equal_to(member, parsed) === false)
        throw new Error("Bug on typescript-json.createStringifier(): wrong string conversion.");
}

interface IMember
{
    id: string | null;
    email: String;
    name: string;
    sex: "male" | "female" | 1 | 2 | null;
    age: number | null;
    dead: boolean | null;
}