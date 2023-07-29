import typia from "typia";

/**
 * An article of BBS.
 *
 * Let's see how TypeScript parses comments on an interface type.
 *
 * It will also contain the link tag like {@link IAttachmentFile}.
 *
 * @authot Samchon
 * @deprecated
 * @test
 */
export interface IBbsArticle {
    /**
     * Primary Key.
     *
     * @format uuid
     */
    id: string;

    title: string;

    body: string;

    /**
     * @format date-time
     */
    created_at: string;
}

console.log(
    JSON.stringify(
        typia.metadata<[IBbsArticle]>().collection.objects[0].description,
        null,
        4,
    ),
);
