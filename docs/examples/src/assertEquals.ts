import typia from "typia";
import { v4 } from "uuid";

typia.assertEquals<IMember>({
    id: v4(),
    email: "samchon.github@gmail.com",
    age: 30,
    sex: 1, // extra
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
     * @type int
     * @exclusiveMinimum 19
     * @maximum 100
     */
    age: number;
}
