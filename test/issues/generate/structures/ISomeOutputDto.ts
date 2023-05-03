export interface ISomeOutputDto {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @minLength 3
     */
    name: string;

    /**
     * @minimum 0
     * @maximum 100
     */
    age: number;
}
