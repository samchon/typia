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
}
export namespace ObjectJsonTag {}
