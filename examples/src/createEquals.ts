import typia from "typia";

export const check = typia.createEquals<IMember>();

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