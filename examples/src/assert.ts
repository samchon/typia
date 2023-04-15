import typia from "typia";
import { v4 } from "uuid";

typia.assert<IMember>({
    id: v4(),
    email: "samchon.github@gmail.com",
    age: 30,
});

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
