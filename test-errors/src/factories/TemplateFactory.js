"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
var TemplateFactory;
(function (TemplateFactory) {
    TemplateFactory.generate = (expressions) => {
        if (expressions.every((exp) => typescript_1.default.isStringLiteral(exp)))
            return typescript_1.default.factory.createStringLiteral(expressions
                .map((str) => str.text)
                .join(""));
        const it = {
            value: "",
            index: 0,
        };
        gather(expressions)(it);
        const head = typescript_1.default.factory.createTemplateHead(it.value);
        const spans = [];
        while (true) {
            const elem = expressions[it.index++];
            gather(expressions)(it);
            const broken = it.index === expressions.length;
            spans.push(typescript_1.default.factory.createTemplateSpan(elem, broken
                ? typescript_1.default.factory.createTemplateTail(it.value)
                : typescript_1.default.factory.createTemplateMiddle(it.value)));
            if (broken === true)
                break;
        }
        return typescript_1.default.factory.createTemplateExpression(head, spans);
    };
    const gather = (expressions) => (it) => {
        const found = expressions.findIndex((elem, index) => index >= it.index && !typescript_1.default.isStringLiteral(elem));
        const last = found !== -1 ? found : expressions.length;
        it.value = expressions
            .slice(it.index, last)
            .map((elem) => elem.text)
            .reduce((x, y) => x + y, "");
        it.index = last;
    };
})(TemplateFactory || (exports.TemplateFactory = TemplateFactory = {}));
