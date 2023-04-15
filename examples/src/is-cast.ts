import typia from "typia";
import { v4 } from "uuid";

const input: unknown = {
    id: v4(),
    email: "samchon.github@gmail.com",
    age: 30,
} as any;
if (typia.is<IMember>(input)) console.log(input.id, input.email, input.age);

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
     * @exclusiveMinimum 19
     * @maximum 100
     */
    age: number;
}
