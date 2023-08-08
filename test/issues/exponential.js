(input) => {
    const $string = typia_1.default.createStringify.string;
    const $join = typia_1.default.createStringify.join;
    const $number = typia_1.default.createStringify.number;
    const $throws = typia_1.default.createStringify.throws;
    const $tail = typia_1.default.createStringify.tail;
    const $so0 = (input) =>
        `{${$tail(
            `"id":${$string(input.id)},"name":${$string(
                input.name,
            )},${Object.entries(input)
                .map(([key, value]) => {
                    if (undefined === value) return "";
                    if (["id", "name"].some((regular) => regular === key))
                        return "";
                    if (
                        RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                            key,
                        )
                    )
                        return `${JSON.stringify(key)}:${$number(value)}`;
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return `${JSON.stringify(key)}:${$string(value)}`;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return `${JSON.stringify(key)}:${$string(value)}`;
                    if (
                        RegExp(
                            /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        return `${JSON.stringify(key)}:${(() => {
                            if ("string" === typeof value)
                                return $string(value);
                            if ("number" === typeof value)
                                return $number(value);
                            if ("boolean" === typeof value) return value;
                            $throws({
                                expected: "(boolean | number | string)",
                                value: value,
                            });
                        })()}`;
                    if (
                        RegExp(
                            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        return `${JSON.stringify(key)}:${value}`;
                    return "";
                })
                .filter((str) => "" !== str)
                .join(",")}`,
        )}}`;
    return $so0(input);
};
