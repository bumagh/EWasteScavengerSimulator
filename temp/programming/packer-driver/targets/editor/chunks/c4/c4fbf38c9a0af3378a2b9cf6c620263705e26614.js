System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Debug, Validator, _crd;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  _export("Validator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd4e8bTK8ZCioXAM2TqYniF", "Validator", undefined);

      _export("Validator", Validator = class Validator {
        static IsObjectIllegal(target, targetName, debugTag = "Validator") {
          var illegal = target == null || target == undefined;
          if (illegal) (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Error(`对象${targetName}为空`, debugTag);
          return illegal;
        }

        static IsObjectEmpty(target) {
          return target == null || target == undefined;
        }

        static IsStringIllegal(target, targetName, debugTag = "Validator") {
          var illegal = target == null || target == "" || target == undefined;
          if (illegal) (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Error(`字符串${targetName}为空`, debugTag);
          return illegal;
        }

        static IsStringEmpty(target) {
          return target == null || target == "" || target == undefined;
        }

        static IsNumberIllegal(target, targetName) {
          var illegal = Number.isNaN(target) || target == null || target == undefined || target <= 0;
          if (illegal) (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Error(`数字${targetName}为空或小于等于0`);
          return illegal;
        }

        static IsArrayOutOfIndex(array, index) {
          if (index >= array.length) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Error(`数组${array}的索引${index}越界`);
            return true;
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4fbf38c9a0af3378a2b9cf6c620263705e26614.js.map