'use strict';

var core = require('@capacitor/core');

const ZScheduler = core.registerPlugin('ZScheduler', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ZSchedulerWeb()),
});

class ZSchedulerWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ZSchedulerWeb: ZSchedulerWeb
});

exports.ZScheduler = ZScheduler;
//# sourceMappingURL=plugin.cjs.js.map
