if (!self.define) {
    let e,
        i = {};
    const r = (r, n) => (
        (r = new URL(r + ".js", n).href),
        i[r] ||
            new Promise((i) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = r), (e.onload = i), document.head.appendChild(e);
                } else (e = r), importScripts(r), i();
            }).then(() => {
                let e = i[r];
                if (!e)
                    throw new Error(`Module ${r} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, s) => {
        const l =
            e ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (i[l]) return;
        let b = {};
        const o = (e) => r(e, l),
            c = { module: { uri: l }, exports: b, require: o };
        i[l] = Promise.all(n.map((e) => c[e] || o(e))).then(
            (e) => (s(...e), b)
        );
    };
}
define(["./workbox-6567b62a"], function (e) {
    "use strict";
    e.setCacheNameDetails({ prefix: "my-vue-pwa" }),
        self.addEventListener("message", (e) => {
            e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
        }),
        e.precacheAndRoute(
            [
                { url: "/css/289.29426026.css", revision: null },
                { url: "/css/544.04876e08.css", revision: null },
                { url: "/css/586.fb5b0aa9.css", revision: null },
                { url: "/css/app.4e8a0d1d.css", revision: null },
                {
                    url: "/img/10.webp",
                    revision: "faa1914b1e142023c7c9f2cd26f020f5",
                },
                {
                    url: "/img/11.webp",
                    revision: "d859d7139c127b90e9310f14a75640cb",
                },
                {
                    url: "/img/12.webp",
                    revision: "bdcfa30b9827618dc34b4001d21026d1",
                },
                {
                    url: "/img/13.webp",
                    revision: "21926a79ecd6c6f6facef550f5e9a104",
                },
                {
                    url: "/img/14.webp",
                    revision: "466dc87ca9f749635db8c2049edb5897",
                },
                {
                    url: "/img/15.webp",
                    revision: "4287ecdb384a6e7fd023aaeb8495d6f1",
                },
                {
                    url: "/img/16.webp",
                    revision: "f3204b748c59b7138cb21edf5af46db5",
                },
                {
                    url: "/img/17.webp",
                    revision: "0f3be183667c55a45d0726b67919ef34",
                },
                {
                    url: "/img/18.webp",
                    revision: "7213ef7d03057d145084a549a3482842",
                },
                {
                    url: "/img/19.webp",
                    revision: "6e686f35217ed8ad1ddff777d83567d4",
                },
                {
                    url: "/img/22.webp",
                    revision: "db205763a119a0bd8ba0917031eb3712",
                },
                {
                    url: "/img/23.webp",
                    revision: "30bb1607ea796930b2c325ff3770b58b",
                },
                {
                    url: "/img/24.webp",
                    revision: "4b43ec8c42d2a7b8a89370554d0d9f14",
                },
                {
                    url: "/img/26.webp",
                    revision: "fc4a7aff2c2b8d8d407ab743d4934bcf",
                },
                {
                    url: "/img/27.webp",
                    revision: "5b16dc7cce835a02ff719104f31d8ab2",
                },
                {
                    url: "/img/29.webp",
                    revision: "91445acc882bea00e82a94a0a956b35c",
                },
                {
                    url: "/img/30.webp",
                    revision: "b747a646083ffd582cd224f2cfc2a2da",
                },
                {
                    url: "/img/32.webp",
                    revision: "6d930b1d071abb51d3622426e2997ef7",
                },
                {
                    url: "/img/34.webp",
                    revision: "64c02cc6f4d6f692be5b58176aa80d6d",
                },
                {
                    url: "/img/4.webp",
                    revision: "4e4da948a365d718edfd3e9567b75a64",
                },
                {
                    url: "/img/5.webp",
                    revision: "87bfad07f79bc9c80a67dab0ce57c80f",
                },
                {
                    url: "/img/6.webp",
                    revision: "7683a1600eb8038d136cbf62c14ef338",
                },
                {
                    url: "/img/7.webp",
                    revision: "d2912280a90d0ff1f1dfd1d28c04acc8",
                },
                {
                    url: "/img/8.webp",
                    revision: "e55d76a07adb610fe0f3b0fc6855ec87",
                },
                { url: "/img/log_spon-1.139b756c.png", revision: null },
                {
                    url: "/img/log_spon-1.png",
                    revision: "b53be69c654d2a9430377ddef593c2c5",
                },
                { url: "/img/log_spon-2.90331885.png", revision: null },
                {
                    url: "/img/log_spon-2.png",
                    revision: "c233f7cd933a356f16e3642790f40f69",
                },
                { url: "/img/log_spon-3.efd83314.png", revision: null },
                {
                    url: "/img/log_spon-3.png",
                    revision: "5e49fb80daba07e28f56a660612c4fe4",
                },
                { url: "/img/log_spon-4.b513a600.png", revision: null },
                {
                    url: "/img/log_spon-4.png",
                    revision: "e53d93a90c96e0ee12332b8d83a1143c",
                },
                { url: "/img/log_spon-5.25d8b899.png", revision: null },
                {
                    url: "/img/log_spon-5.png",
                    revision: "40c9a6a24fbe8b55e4bed9cddbb6539c",
                },
                { url: "/img/logo.e7ff44eb.png", revision: null },
                { url: "/img/Ломтик1.0ac27853.png", revision: null },
                {
                    url: "/img/Ломтик1.png",
                    revision: "2b256aeda26c2f17f3e516ddacf89f4c",
                },
                {
                    url: "/index.html",
                    revision: "324913a8aa7557e97d033bb0029bf8c6",
                },
                { url: "/js/289.7db30ad0.js", revision: null },
                { url: "/js/350.8144f40a.js", revision: null },
                { url: "/js/544.1c611875.js", revision: null },
                { url: "/js/586.86695979.js", revision: null },
                { url: "/js/app.31c824b4.js", revision: null },
                { url: "/js/chunk-vendors.e90d4c36.js", revision: null },
                {
                    url: "/manifest.json",
                    revision: "a9e6ad0bc77d4cdbfd303389365c1a3e",
                },
                {
                    url: "/robots.txt",
                    revision: "b6216d61c03e6ce0c9aea6ca7808f7ca",
                },
            ],
            {}
        );
});
//# sourceMappingURL=service-worker.js.map
