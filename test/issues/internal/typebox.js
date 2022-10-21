//---------------------------------------------------
// TypeBoxArrayRecursive
//---------------------------------------------------
function TypeBoxArrayRecursive() {
    function check_T0(value) {
        return (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            Array.isArray(value.children) &&
            value.children.every((value) => check_T0(value)) &&
            typeof value.id === "number" &&
            typeof value.code === "string" &&
            typeof value.sequence === "number" &&
            typeof value.created_at === "object" &&
            value.created_at !== null &&
            !Array.isArray(value.created_at) &&
            typeof value.created_at.time === "number" &&
            typeof value.created_at.zone === "number"
        );
    }
    return function check(value) {
        return check_T0(value);
    };
}

//---------------------------------------------------
// TypeBoxArrayRecursiveUnionExplicit
//---------------------------------------------------
function TypeBoxArrayRecursiveUnionExplicit() {
    function check_T1(value) {
        return (
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.width === "number" &&
                typeof value.height === "number" &&
                typeof value.url === "string" &&
                typeof value.size === "number" &&
                value.type === "file" &&
                value.extension === "jpg") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.size === "number" &&
                typeof value.content === "string" &&
                value.type === "file" &&
                value.extension === "txt") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.size === "number" &&
                typeof value.count === "number" &&
                value.type === "file" &&
                value.extension === "zip") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                check_T1(value.target) &&
                value.type === "file" &&
                value.extension === "lnk") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                Array.isArray(value.children) &&
                value.children.every((value) => check_T1(value)) &&
                value.type === "directory")
        );
    }
    return function check(value) {
        return Array.isArray(value) && value.every((value) => check_T1(value));
    };
}

//---------------------------------------------------
// TypeBoxArrayRecursiveUnionImplicit
//---------------------------------------------------
function TypeBoxArrayRecursiveUnionImplicit() {
    function check_T2(value) {
        return (
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.width === "number" &&
                typeof value.height === "number" &&
                typeof value.url === "string" &&
                typeof value.size === "number") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.size === "number" &&
                typeof value.content === "string") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                typeof value.size === "number" &&
                typeof value.count === "number") ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                check_T2(value.target)) ||
            (typeof value === "object" &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === "number" &&
                typeof value.name === "string" &&
                typeof value.path === "string" &&
                Array.isArray(value.children) &&
                value.children.every((value) => check_T2(value)))
        );
    }
    return function check(value) {
        return Array.isArray(value) && value.every((value) => check_T2(value));
    };
}

//---------------------------------------------------
// TypeBoxObjectHierarchical
//---------------------------------------------------
function TypeBoxObjectHierarchical() {
    return function check(value) {
        return (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            typeof value.id === "number" &&
            typeof value.channel === "object" &&
            value.channel !== null &&
            !Array.isArray(value.channel) &&
            typeof value.channel.id === "number" &&
            typeof value.channel.code === "string" &&
            typeof value.channel.name === "string" &&
            typeof value.channel.sequence === "number" &&
            typeof value.channel.exclusive === "boolean" &&
            typeof value.channel.priority === "number" &&
            typeof value.channel.created_at === "object" &&
            value.channel.created_at !== null &&
            !Array.isArray(value.channel.created_at) &&
            typeof value.channel.created_at.time === "number" &&
            typeof value.channel.created_at.zone === "number" &&
            (value.member === null ||
                (typeof value.member === "object" &&
                    value.member !== null &&
                    !Array.isArray(value.member) &&
                    typeof value.member.id === "number" &&
                    typeof value.member.account === "object" &&
                    value.member.account !== null &&
                    !Array.isArray(value.member.account) &&
                    typeof value.member.account.id === "number" &&
                    typeof value.member.account.code === "string" &&
                    typeof value.member.account.created_at === "object" &&
                    value.member.account.created_at !== null &&
                    !Array.isArray(value.member.account.created_at) &&
                    typeof value.member.account.created_at.time === "number" &&
                    typeof value.member.account.created_at.zone === "number" &&
                    (value.member.enterprise === null ||
                        (typeof value.member.enterprise === "object" &&
                            value.member.enterprise !== null &&
                            !Array.isArray(value.member.enterprise) &&
                            typeof value.member.enterprise.id === "number" &&
                            typeof value.member.enterprise.account ===
                                "object" &&
                            value.member.enterprise.account !== null &&
                            !Array.isArray(value.member.enterprise.account) &&
                            typeof value.member.enterprise.account.id ===
                                "number" &&
                            typeof value.member.enterprise.account.code ===
                                "string" &&
                            typeof value.member.enterprise.account
                                .created_at === "object" &&
                            value.member.enterprise.account.created_at !==
                                null &&
                            !Array.isArray(
                                value.member.enterprise.account.created_at,
                            ) &&
                            typeof value.member.enterprise.account.created_at
                                .time === "number" &&
                            typeof value.member.enterprise.account.created_at
                                .zone === "number" &&
                            typeof value.member.enterprise.name === "string" &&
                            typeof value.member.enterprise.grade === "number" &&
                            typeof value.member.enterprise.created_at ===
                                "object" &&
                            value.member.enterprise.created_at !== null &&
                            !Array.isArray(
                                value.member.enterprise.created_at,
                            ) &&
                            typeof value.member.enterprise.created_at.time ===
                                "number" &&
                            typeof value.member.enterprise.created_at.zone ===
                                "number")) &&
                    Array.isArray(value.member.emails) &&
                    value.member.emails.every(
                        (value) => typeof value === "string",
                    ) &&
                    typeof value.member.created_at === "object" &&
                    value.member.created_at !== null &&
                    !Array.isArray(value.member.created_at) &&
                    typeof value.member.created_at.time === "number" &&
                    typeof value.member.created_at.zone === "number" &&
                    typeof value.member.authorized === "boolean")) &&
            (value.account === null ||
                (typeof value.account === "object" &&
                    value.account !== null &&
                    !Array.isArray(value.account) &&
                    typeof value.account.id === "number" &&
                    typeof value.account.code === "string" &&
                    typeof value.account.created_at === "object" &&
                    value.account.created_at !== null &&
                    !Array.isArray(value.account.created_at) &&
                    typeof value.account.created_at.time === "number" &&
                    typeof value.account.created_at.zone === "number")) &&
            typeof value.href === "string" &&
            typeof value.referrer === "string" &&
            Array.isArray(value.ip) &&
            value.ip.length === 4 &&
            typeof value.ip[0] === "number" &&
            typeof value.ip[1] === "number" &&
            typeof value.ip[2] === "number" &&
            typeof value.ip[3] === "number" &&
            typeof value.created_at === "object" &&
            value.created_at !== null &&
            !Array.isArray(value.created_at) &&
            typeof value.created_at.time === "number" &&
            typeof value.created_at.zone === "number"
        );
    };
}

//---------------------------------------------------
// TypeBoxObjectRecursive
//---------------------------------------------------
function TypeBoxObjectRecursive() {
    function check_T3(value) {
        return (
            typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            (check_T3(value.parent) || value.parent === null) &&
            typeof value.id === "number" &&
            typeof value.code === "string" &&
            typeof value.name === "string" &&
            typeof value.sequence === "number" &&
            typeof value.created_at === "object" &&
            value.created_at !== null &&
            !Array.isArray(value.created_at) &&
            typeof value.created_at.time === "number" &&
            typeof value.created_at.zone === "number"
        );
    }
    return function check(value) {
        return check_T3(value);
    };
}

//---------------------------------------------------
// TypeBoxObjectUnionExplicit
//---------------------------------------------------
function TypeBoxObjectUnionExplicit() {
    return function check(value) {
        return (
            Array.isArray(value) &&
            value.every(
                (value) =>
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.x === "number" &&
                        typeof value.y === "number" &&
                        value.type === "point") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        value.type === "line") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        typeof value.p3 === "object" &&
                        value.p3 !== null &&
                        !Array.isArray(value.p3) &&
                        typeof value.p3.x === "number" &&
                        typeof value.p3.y === "number" &&
                        value.type === "triangle") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        typeof value.p3 === "object" &&
                        value.p3 !== null &&
                        !Array.isArray(value.p3) &&
                        typeof value.p3.x === "number" &&
                        typeof value.p3.y === "number" &&
                        typeof value.p4 === "object" &&
                        value.p4 !== null &&
                        !Array.isArray(value.p4) &&
                        typeof value.p4.x === "number" &&
                        typeof value.p4.y === "number" &&
                        value.type === "rectangle") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Array.isArray(value.points) &&
                        value.points.every(
                            (value) =>
                                typeof value === "object" &&
                                value !== null &&
                                !Array.isArray(value) &&
                                typeof value.x === "number" &&
                                typeof value.y === "number",
                        ) &&
                        value.type === "polyline") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.outer === "object" &&
                        value.outer !== null &&
                        !Array.isArray(value.outer) &&
                        Array.isArray(value.outer.points) &&
                        value.outer.points.every(
                            (value) =>
                                typeof value === "object" &&
                                value !== null &&
                                !Array.isArray(value) &&
                                typeof value.x === "number" &&
                                typeof value.y === "number",
                        ) &&
                        Array.isArray(value.inner) &&
                        value.inner.every(
                            (value) =>
                                typeof value === "object" &&
                                value !== null &&
                                !Array.isArray(value) &&
                                Array.isArray(value.points) &&
                                value.points.every(
                                    (value) =>
                                        typeof value === "object" &&
                                        value !== null &&
                                        !Array.isArray(value) &&
                                        typeof value.x === "number" &&
                                        typeof value.y === "number",
                                ),
                        ) &&
                        value.type === "polygon") ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        typeof value.centroid === "object" &&
                        value.centroid !== null &&
                        !Array.isArray(value.centroid) &&
                        typeof value.centroid.x === "number" &&
                        typeof value.centroid.y === "number" &&
                        typeof value.radius === "number" &&
                        value.type === "circle"),
            )
        );
    };
}

//---------------------------------------------------
// TypeBoxObjectUnionImplicit
//---------------------------------------------------
function TypeBoxObjectUnionImplicit() {
    return function check(value) {
        return (
            Array.isArray(value) &&
            value.every(
                (value) =>
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 3 &&
                        typeof value.x === "number" &&
                        typeof value.y === "number" &&
                        (value.slope === null ||
                            value.slope === undefined ||
                            typeof value.slope === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 3 &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        Object.keys(value.p1).length === 3 &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        (value.p1.slope === null ||
                            value.p1.slope === undefined ||
                            typeof value.p1.slope === "number") &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        Object.keys(value.p2).length === 3 &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        (value.p2.slope === null ||
                            value.p2.slope === undefined ||
                            typeof value.p2.slope === "number") &&
                        (value.distance === null ||
                            value.distance === undefined ||
                            typeof value.distance === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 6 &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        Object.keys(value.p1).length === 3 &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        (value.p1.slope === null ||
                            value.p1.slope === undefined ||
                            typeof value.p1.slope === "number") &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        Object.keys(value.p2).length === 3 &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        (value.p2.slope === null ||
                            value.p2.slope === undefined ||
                            typeof value.p2.slope === "number") &&
                        typeof value.p3 === "object" &&
                        value.p3 !== null &&
                        !Array.isArray(value.p3) &&
                        Object.keys(value.p3).length === 3 &&
                        typeof value.p3.x === "number" &&
                        typeof value.p3.y === "number" &&
                        (value.p3.slope === null ||
                            value.p3.slope === undefined ||
                            typeof value.p3.slope === "number") &&
                        (value.width === null ||
                            value.width === undefined ||
                            typeof value.width === "number") &&
                        (value.height === null ||
                            value.height === undefined ||
                            typeof value.height === "number") &&
                        (value.area === null ||
                            value.area === undefined ||
                            typeof value.area === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 7 &&
                        typeof value.p1 === "object" &&
                        value.p1 !== null &&
                        !Array.isArray(value.p1) &&
                        Object.keys(value.p1).length === 3 &&
                        typeof value.p1.x === "number" &&
                        typeof value.p1.y === "number" &&
                        (value.p1.slope === null ||
                            value.p1.slope === undefined ||
                            typeof value.p1.slope === "number") &&
                        typeof value.p2 === "object" &&
                        value.p2 !== null &&
                        !Array.isArray(value.p2) &&
                        Object.keys(value.p2).length === 3 &&
                        typeof value.p2.x === "number" &&
                        typeof value.p2.y === "number" &&
                        (value.p2.slope === null ||
                            value.p2.slope === undefined ||
                            typeof value.p2.slope === "number") &&
                        typeof value.p3 === "object" &&
                        value.p3 !== null &&
                        !Array.isArray(value.p3) &&
                        Object.keys(value.p3).length === 3 &&
                        typeof value.p3.x === "number" &&
                        typeof value.p3.y === "number" &&
                        (value.p3.slope === null ||
                            value.p3.slope === undefined ||
                            typeof value.p3.slope === "number") &&
                        typeof value.p4 === "object" &&
                        value.p4 !== null &&
                        !Array.isArray(value.p4) &&
                        Object.keys(value.p4).length === 3 &&
                        typeof value.p4.x === "number" &&
                        typeof value.p4.y === "number" &&
                        (value.p4.slope === null ||
                            value.p4.slope === undefined ||
                            typeof value.p4.slope === "number") &&
                        (value.width === null ||
                            value.width === undefined ||
                            typeof value.width === "number") &&
                        (value.height === null ||
                            value.height === undefined ||
                            typeof value.height === "number") &&
                        (value.area === null ||
                            value.area === undefined ||
                            typeof value.area === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 2 &&
                        Array.isArray(value.points) &&
                        value.points.every(
                            (value) =>
                                typeof value === "object" &&
                                value !== null &&
                                !Array.isArray(value) &&
                                Object.keys(value).length === 3 &&
                                typeof value.x === "number" &&
                                typeof value.y === "number" &&
                                (value.slope === null ||
                                    value.slope === undefined ||
                                    typeof value.slope === "number"),
                        ) &&
                        (value.length === null ||
                            value.length === undefined ||
                            typeof value.length === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).every((key) =>
                            ["outer", "inner", "area"].includes(key),
                        ) &&
                        typeof value.outer === "object" &&
                        value.outer !== null &&
                        !Array.isArray(value.outer) &&
                        Object.keys(value.outer).length === 2 &&
                        Array.isArray(value.outer.points) &&
                        value.outer.points.every(
                            (value) =>
                                typeof value === "object" &&
                                value !== null &&
                                !Array.isArray(value) &&
                                Object.keys(value).length === 3 &&
                                typeof value.x === "number" &&
                                typeof value.y === "number" &&
                                (value.slope === null ||
                                    value.slope === undefined ||
                                    typeof value.slope === "number"),
                        ) &&
                        (value.outer.length === null ||
                            value.outer.length === undefined ||
                            typeof value.outer.length === "number") &&
                        (value.inner === undefined
                            ? true
                            : Array.isArray(value.inner) &&
                              value.inner.every(
                                  (value) =>
                                      typeof value === "object" &&
                                      value !== null &&
                                      !Array.isArray(value) &&
                                      Object.keys(value).length === 2 &&
                                      Array.isArray(value.points) &&
                                      value.points.every(
                                          (value) =>
                                              typeof value === "object" &&
                                              value !== null &&
                                              !Array.isArray(value) &&
                                              Object.keys(value).length === 3 &&
                                              typeof value.x === "number" &&
                                              typeof value.y === "number" &&
                                              (value.slope === null ||
                                                  value.slope === undefined ||
                                                  typeof value.slope ===
                                                      "number"),
                                      ) &&
                                      (value.length === null ||
                                          value.length === undefined ||
                                          typeof value.length === "number"),
                              )) &&
                        (value.area === null ||
                            value.area === undefined ||
                            typeof value.area === "number")) ||
                    (typeof value === "object" &&
                        value !== null &&
                        !Array.isArray(value) &&
                        Object.keys(value).every((key) =>
                            ["centroid", "radius", "area"].includes(key),
                        ) &&
                        (value.centroid === undefined
                            ? true
                            : typeof value.centroid === "object" &&
                              value.centroid !== null &&
                              !Array.isArray(value.centroid) &&
                              Object.keys(value.centroid).length === 3 &&
                              typeof value.centroid.x === "number" &&
                              typeof value.centroid.y === "number" &&
                              (value.centroid.slope === null ||
                                  value.centroid.slope === undefined ||
                                  typeof value.centroid.slope === "number")) &&
                        typeof value.radius === "number" &&
                        (value.area === null ||
                            value.area === undefined ||
                            typeof value.area === "number")),
            )
        );
    };
}
