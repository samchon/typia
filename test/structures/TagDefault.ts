export interface TagDefault {
    /**
     * @default false
     */
    boolean: boolean;

    /**
     * @default 1
     */
    numeric: number;

    /**
     * @default two
     */
    literal: string;

    /**
     * @default
     */
    union_but_boolean: boolean | number | string | null;

    /**
     * @default 1
     */
    union_but_number: boolean | number | string | null;

    /**
     * @default two
     */
    union_but_string: boolean | number | string | null;
}
