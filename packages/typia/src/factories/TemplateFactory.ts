import ts from "typescript";

export namespace TemplateFactory {
  export const generate = (expressions: ts.Expression[]): ts.Expression => {
    if (expressions.every((exp) => ts.isStringLiteral(exp)))
      return ts.factory.createStringLiteral(
        (expressions as ts.StringLiteral[]).map((str) => str.text).join(""),
      );

    const iterator: IIterator = {
      value: "",
      index: 0,
    };
    gather({
      expressions,
      iterator,
    });

    const head: ts.TemplateHead = ts.factory.createTemplateHead(iterator.value);
    const spans: ts.TemplateSpan[] = [];

    while (true) {
      const elem: ts.Expression = expressions[iterator.index++]!;
      gather({
        expressions,
        iterator,
      });

      const broken: boolean = iterator.index === expressions.length;
      spans.push(
        ts.factory.createTemplateSpan(
          elem,
          broken
            ? ts.factory.createTemplateTail(iterator.value)
            : ts.factory.createTemplateMiddle(iterator.value),
        ),
      );
      if (broken === true) break;
    }
    return ts.factory.createTemplateExpression(head, spans);
  };

  const gather = (props: {
    expressions: ts.Expression[];
    iterator: IIterator;
  }): void => {
    const found: number = props.expressions.findIndex(
      (elem, index) =>
        index >= props.iterator.index && !ts.isStringLiteral(elem),
    );

    const last: number = found !== -1 ? found : props.expressions.length;
    props.iterator.value = props.expressions
      .slice(props.iterator.index, last)
      .map((elem) => (elem as ts.StringLiteral).text)
      .reduce((x, y) => x + y, "");
    props.iterator.index = last;
  };

  interface IIterator {
    value: string;
    index: number;
  }
}
