// ATMOIC
input => {
        return true;
    }

// ARRAY
input => {
        return Array.isArray(input) && input.every(elem => true);
    }

// OBJECT
input => {
        const $io0 = input => true;
        return "object" === typeof input && null !== input && $io0(input);
    }

// ARRAY OF OBJECT
input => {
        const $io0 = input => true;
        return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && $io0(elem));
    }

// DYNAMIC OBJECT
input => {
        const $join = typia_1.default.createIs.join;
        const $io0 = input => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return true;
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    }

// ARRAY OF DYNAMIC OBJECT
input => {
        const $join = typia_1.default.createIs.join;
        const $io0 = input => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return true;
            return true;
        });
        return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && false === Array.isArray(elem) && $io0(elem));
    }