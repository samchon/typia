import typia from "typia";

type YourType = {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @format email
     */
    email: string;

    /**
     * @type uint
     * @minimum 20
     * @maximum 100
     */
    age: number;
    parent: YourType | null;
    children: YourType[];
};

console.log(typia.createIs<YourType>().toString());
