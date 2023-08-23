(input) => {
    const $io0 = (input) =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        Array.isArray(input.children) &&
        input.children.every(
            (elem) => "object" === typeof elem && null !== elem && $iu0(elem),
        );
    const $io1 = (input) =>
        ("read" === input.access || "write" === input.access) &&
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        Array.isArray(input.children) &&
        input.children.every(
            (elem) => "object" === typeof elem && null !== elem && $iu0(elem),
        );
    const $io2 = (input) =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.width &&
        Number.isFinite(input.width) &&
        "number" === typeof input.height &&
        Number.isFinite(input.height) &&
        "string" === typeof input.url &&
        "number" === typeof input.size &&
        Number.isFinite(input.size);
    const $io3 = (input) =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        Number.isFinite(input.size) &&
        "string" === typeof input.content;
    const $io4 = (input) =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        Number.isFinite(input.size) &&
        "number" === typeof input.count &&
        Number.isFinite(input.count);
    const $io5 = (input) =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "object" === typeof input.target &&
        null !== input.target &&
        $iu0(input.target);
    const $iu0 = (input) =>
        (() => {
            if ("number" === typeof input.id && Number.isFinite(input.id))
                return $io0(input);
            else if (undefined !== input.access) return $io1(input);
            else if ("number" === typeof input.id && Number.isFinite(input.id))
                return $io2(input);
            else if ("number" === typeof input.id && Number.isFinite(input.id))
                return $io3(input);
            else if ("number" === typeof input.id && Number.isFinite(input.id))
                return $io4(input);
            else if ("number" === typeof input.id && Number.isFinite(input.id))
                return $io5(input);
            else return false;
        })();
    return (
        Array.isArray(input) &&
        input.every(
            (elem) => "object" === typeof elem && null !== elem && $iu0(elem),
        )
    );
};
