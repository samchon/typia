export interface CommentTagDefault {
    /**
     * @default false
     */
    boolean: boolean;

    /**
     * @default 1
     */
    number: number;

    /**
     * @default two
     */
    string: string;

    /**
     * @default Very long text, can you understand it?
     */
    text: string;

    /**
     * @default prefix_A
     */
    template: `prefix_${string}`;

    /**
     * @default false
     * @default 1
     * @default two
     */
    boolean_and_number_and_string: boolean | number | string;

    /**
     * @default false
     */
    union_but_boolean: boolean | number | string;

    /**
     * @default 1
     */
    union_but_number: boolean | number | string;

    /**
     * @default two
     */
    union_but_string: boolean | number | string;

    /**
     * @default 7
     * @minimum 3
     * @maximum 5
     */
    vulnerable_range: number;

    /**
     * @default two
     */
    vulnerable_template: `prefix_${string}`;

    /**
     * @default false
     * @default 1
     * @default prefix_B
     */
    boolean_and_number_and_template: boolean | number | `prefix_${string}`;
}
export namespace CommentTagDefault {
    export function generate(): CommentTagDefault {
        return {
            boolean: false,
            number: 1,
            string: "two",
            text: "Very long text, can you understand it?",
            template: "prefix_A",
            boolean_and_number_and_string: false,
            union_but_boolean: false,
            union_but_number: 1,
            union_but_string: "two",
            vulnerable_range: 4,
            vulnerable_template: "prefix_B",
            boolean_and_number_and_template: false,
        };
    }
}
