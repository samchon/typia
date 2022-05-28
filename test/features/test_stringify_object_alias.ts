import TSON from "../../src";
import { Primitive } from "../internal/Primitive";

export function test_stringify_object_alias(): void {
    const member: Alias = {
        id: "some-id",
        email: "someone@someone.com",
        name: "someone",
        sex: "male",
        age: null,
        dead: null,
    };
    const stringify: (input: Alias) => string = TSON.createStringifier<Alias>();

    const json: string = stringify(member);
    const parsed: Alias = JSON.parse(json);

    if (Primitive.equal_to(member, parsed) === false)
        throw new Error(
            "Bug on TSON.createStringifier(): failed to understand the object alias type.",
        );
}

/**
 * Member information.
 */
interface IMember {
    /**
     * Primary Key.
     */
    id: string | null;

    /**
     * Email address.
     */
    email: String;

    /**
     * Real name.
     */
    name: string;

    /**
     * Sex of the member.
     */
    sex: "male" | "female" | 1 | 2 | null;

    /**
     * Age, but omittable.
     */
    age: number | null;

    /**
     * Is dead or alive.
     */
    dead: boolean | null;
}
type Alias = IMember;
