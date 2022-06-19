export type ObjectLiteralProperty = ObjectLiteralProperty.ISomething;
export namespace ObjectLiteralProperty {
    export interface ISomething {
        "something-interesting-do-you-want?": string;
        ["or-something-crazy-do-you-want?"]: string;
    }
    export function generate(): ObjectLiteralProperty {
        return {
            "something-interesting-do-you-want?": "what's that",
            "or-something-crazy-do-you-want?": "nope",
        };
    }
}
