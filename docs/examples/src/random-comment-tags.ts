import typia from "typia";

const data: CommentTag = typia.random<CommentTag>();

console.log(data);

interface CommentTag {
    /**
     * @type int
     */
    type: number;

    /**
     * @exclusiveMinimum 19
     * @maximum 100
     */
    number?: number;

    /**
     * @minLength 3
     */
    string: string;

    /**
     * @pattern ^[a-z]+$
     */
    pattern: string;

    /**
     * @format date-time
     */
    format: string | null;

    /**
     * In the Array case, possible to restrict its elements.
     *
     * @minItems 3
     * @maxItems 100
     * @format uuid
     */
    array: string[];
}
