System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _class, _crd, ccclass, ChargeUI;

  function _reportPossibleCrUseOfHomeUI(extras) {
    _reporterNs.report("HomeUI", "./HomeUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "731777n3LdF7rEriG3jUd4K", "ChargeUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass
      } = _decorator);

      _export("ChargeUI", ChargeUI = ccclass(_class = class ChargeUI extends Component {
        constructor() {
          super(...arguments);
          this.home = null;
          this.parentBtns = null;
        }

        init(home, parentBtns) {
          this.home = home;
          this.parentBtns = parentBtns;
        }

        show() {
          this.node.active = true;
          this.node.emit('fade-in');
        }

        hide() {
          this.node.active = false;
          this.node.emit('fade-out');
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c10f5933b964cce1037a7d0c1b7542516ed3392.js.map