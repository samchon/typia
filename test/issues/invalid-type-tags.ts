import typia from "typia";

/**
 * There are some fucking documentation libraries enforcing user to write invalid
 * `@type` tagged comments like below, even in TypeScript.
 *
 * In such reason, `typia` needs to stop throwing compilation error when invalid
 * `@type` tag being used
 *
 * @type {number}
 * @type {string}
 */
interface IInvalidTag {
    /**
     * @type {string}
     */
    string: string;

    /**
     * @type {number}
     */
    number: number;

    /**
     * @type {int}
     */
    int: number;

    /**
     * @type uint
     */
    valid: number;

    /**
     * @type int
     */
    invalid: string;
}

console.log(typia.createIs<IInvalidTag>().toString());
