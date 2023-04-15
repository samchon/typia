import typia from "typia";
import { v4 } from "uuid";

const input: unknown = {
    id: v4(),
    email: "samchon.github@gmail.com",
    age: 30,
    extra: "superfluous property", // error
};
const is: boolean = typia.is<IMember>(input);
const equals: boolean = typia.equals<IMember>(input);

console.log(is, equals); // true, false

interface IMember {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @format email
     */
    email: string;

    /**
     * @minimum 19
     * @maximum 100
     */
    age: number;
}
