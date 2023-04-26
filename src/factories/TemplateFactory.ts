import ts from "typescript";

export namespace TemplateFactory {
    export const generate = (expressions: ts.Expression[]): ts.Expression => {
        if (expressions.every((exp) => ts.isStringLiteral(exp)))
            return ts.factory.createStringLiteral(
                (expressions as ts.StringLiteral[])
                    .map((str) => str.text)
                    .join(""),
            );

        const it: IIterator = {
            value: "",
            index: 0,
        };
        gather(expressions)(it);

        const head: ts.TemplateHead = ts.factory.createTemplateHead(it.value);
        const spans: ts.TemplateSpan[] = [];

        while (true) {
            const elem: ts.Expression = expressions[it.index++]!;
            gather(expressions)(it);

            const broken: boolean = it.index === expressions.length;
            spans.push(
                ts.factory.createTemplateSpan(
                    elem,
                    broken
                        ? ts.factory.createTemplateTail(it.value)
                        : ts.factory.createTemplateMiddle(it.value),
                ),
            );
            if (broken === true) break;
        }
        return ts.factory.createTemplateExpression(head, spans);
    };

    const gather =
        (expressions: ts.Expression[]) =>
        (it: IIterator): void => {
            const found: number = expressions.findIndex(
                (elem, index) => index >= it.index && !ts.isStringLiteral(elem),
            );

            const last: number = found !== -1 ? found : expressions.length;
            it.value = expressions
                .slice(it.index, last)
                .map((elem) => (elem as ts.StringLiteral).text)
                .reduce((x, y) => x + y, "");
            it.index = last;
        };

    interface IIterator {
        value: string;
        index: number;
    }
}
