import typia from "typia";

type IReviewArtcle = {
    id: string;
    title: string;
    body: string;
    score: number;
};
type IQuestionArticle = {
    id: string;
    title: string;
    body: string;
    secret: boolean;
};
type IArticle = IReviewArtcle | IQuestionArticle;

const app = typia.application<[IArticle]>();
console.log(JSON.stringify(app, null, 4));
