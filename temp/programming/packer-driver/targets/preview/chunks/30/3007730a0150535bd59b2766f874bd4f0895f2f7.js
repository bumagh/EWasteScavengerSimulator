System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, BackPackUI, ShopUI, ChallengeUI, PanelType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, HomeUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBackPackUI(extras) {
    _reporterNs.report("BackPackUI", "./BackPackUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopUI(extras) {
    _reporterNs.report("ShopUI", "./ShopUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChallengeUI(extras) {
    _reporterNs.report("ChallengeUI", "./ChallengeUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelType(extras) {
    _reporterNs.report("PanelType", "./PanelType", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BackPackUI = _unresolved_2.BackPackUI;
    }, function (_unresolved_3) {
      ShopUI = _unresolved_3.ShopUI;
    }, function (_unresolved_4) {
      ChallengeUI = _unresolved_4.ChallengeUI;
    }, function (_unresolved_5) {
      PanelType = _unresolved_5.PanelType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edc2a7itdpDQ5BDY+sVWkwJ", "HomeUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeUI", HomeUI = (_dec = property(Animation), _dec2 = property(_crd && BackPackUI === void 0 ? (_reportPossibleCrUseOfBackPackUI({
        error: Error()
      }), BackPackUI) : BackPackUI), _dec3 = property(_crd && ShopUI === void 0 ? (_reportPossibleCrUseOfShopUI({
        error: Error()
      }), ShopUI) : ShopUI), _dec4 = property(_crd && ChallengeUI === void 0 ? (_reportPossibleCrUseOfChallengeUI({
        error: Error()
      }), ChallengeUI) : ChallengeUI), ccclass(_class = (_class2 = class HomeUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "menuAnim", _descriptor, this);

          _initializerDefineProperty(this, "backPackUI", _descriptor2, this);

          _initializerDefineProperty(this, "shopUI", _descriptor3, this);

          _initializerDefineProperty(this, "challengeUI", _descriptor4, this);

          this.curPanel = (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Home;
        }

        // use this for initialization
        onLoad() {
          this.curPanel = (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Home; // this.menuAnim.play('menu_reset');
        }

        start() {
          this.backPackUI.init(this);
          this.shopUI.init(this, (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Shop);
          this.challengeUI.init(this);
          this.scheduleOnce(() => {
            this.menuAnim.play('menu_intro');
          }, 0.5);
        }

        gotoShop() {
          if (this.curPanel !== (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Shop) {
            this.shopUI.show();
          }
        }

        gotoHome() {
          if (this.curPanel === (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Shop) {
            this.shopUI.hide();
            this.curPanel = (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
              error: Error()
            }), PanelType) : PanelType).Home;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "menuAnim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backPackUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "shopUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "challengeUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3007730a0150535bd59b2766f874bd4f0895f2f7.js.map