export interface ObjectJsonTag {
    /**
     * @deprecated
     */
    vulnerable: string;

    /**
     * Descripted property.
     */
    description: string;

    /**
     * Titled property.
     *
     * @title something
     */
    title: string;

    /**
     * Complicate title.
     *
     * @title something weirdo with {@link something} tag
     */
    complicate_title: string;

    /**
     * Entered title.
     *
     * @title something content with
     * enter and
     * new line
     */
    entered_title: string;
}
export namespace ObjectJsonTag {}
