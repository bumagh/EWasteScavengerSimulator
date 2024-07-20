System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Debug, _crd;

  _export("Debug", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef686Y5HDtFHJse8jQYn/ef", "Debug", undefined);

      _export("Debug", Debug = class Debug {
        static SetIgnores(ignores) {
          Debug.ignores = ignores;
        }

        static Log(msg, tag = "Default") {
          if (Debug.ignores.indexOf(tag) == -1) {
            var data = Debug.AddTag(msg, tag);
            console.log(...data);
          }
        }

        static Error(msg, tag = "Default") {
          if (Debug.ignores.indexOf(tag) == -1) {
            var data = Debug.AddTag(msg, tag);
            console.error(...data);
          }
        }

        static Warn(msg, tag = "Default") {
          if (Debug.ignores.indexOf(tag) == -1) {
            var data = Debug.AddTag(msg, tag);
            console.warn(...data);
          }
        }

        static AddTag(msg, tag) {
          var data = [];
          if (typeof msg == "string") data.push(`[${tag}]  ${msg}`);else {
            data.push(`[${tag}]`);
            data.push(msg);
          }
          return data;
        }

      });

      Debug.ignores = [];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec079b6b684689f8bd87ba19126e8691d0b37817.js.map