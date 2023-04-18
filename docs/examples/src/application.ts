import typia from "typia";

export const MemberSchema = typia.application<[IMember], "ajv">();

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
