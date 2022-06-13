import TSON from "../../../src";

import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_generic_union(): void {
    const question: ISaleQuestion = {
        id: "id",
        writer: "robot",
        contents: RandomGenerator.array(() => ({
            id: "id",
            title: RandomGenerator.string(),
            body: RandomGenerator.string(),
            files: RandomGenerator.array(() => ({
                id: "id",
                name: RandomGenerator.string(),
                extension: RandomGenerator.string(),
                url: RandomGenerator.string(),
            })),
            created_at: new Date().toString(),
        })),
        answer: null,
        created_at: new Date().toString(),
        hit: 0,
    };

    const json: string = TSON.stringify<ISaleEntireArticle>(question);
    const expected: string = JSON.stringify(question);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the generic union object type.",
        );
}

type ISaleEntireArticle = ISaleQuestion | ISaleReview;
type ISaleQuestion = ISaleInquiry<ISaleQuestion.IContent>;
namespace ISaleQuestion {
    export type IContent = ISaleInquiry.IContent;
}
type ISaleReview = ISaleInquiry<ISaleReview.IContent>;
namespace ISaleReview {
    export interface IContent extends ISaleInquiry.IContent {
        score: number;
    }
}

interface ISaleInquiry<Content extends ISaleInquiry.IContent>
    extends ISaleArticle<Content> {
    writer: string;
    answer: ISaleAnswer | null;
}
namespace ISaleInquiry {
    export type IContent = ISaleArticle.IContent;
}
type ISaleAnswer = ISaleArticle<ISaleAnswer.IContent>;
namespace ISaleAnswer {
    export type IContent = ISaleArticle.IContent;
}
interface ISaleArticle<Content extends ISaleArticle.IContent> {
    id: string;
    hit: number;
    contents: Content[];
    created_at: string;
}
namespace ISaleArticle {
    export interface IContent extends IUpdate {
        id: string;
        created_at: string;
    }
    export interface IUpdate {
        title: string;
        body: string;
        files: Omit<IAttachmentFile, "id">[];
    }
}

interface IAttachmentFile {
    id: string;
    name: string;
    extension: string | null;
    url: string;
}
