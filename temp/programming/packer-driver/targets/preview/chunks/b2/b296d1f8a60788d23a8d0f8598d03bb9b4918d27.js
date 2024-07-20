System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Node, Animation, ChargeUI, PanelType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ShopUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHomeUI(extras) {
    _reporterNs.report("HomeUI", "./HomeUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChargeUI(extras) {
    _reporterNs.report("ChargeUI", "./ChargeUI", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ChargeUI = _unresolved_2.ChargeUI;
    }, function (_unresolved_3) {
      PanelType = _unresolved_3.PanelType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d6f9QGL49Fa4UGVF9fmZrd", "ShopUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShopUI", ShopUI = (_dec = property(Animation), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(_crd && ChargeUI === void 0 ? (_reportPossibleCrUseOfChargeUI({
        error: Error()
      }), ChargeUI) : ChargeUI), ccclass(_class = (_class2 = class ShopUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "anim", _descriptor, this);

          _initializerDefineProperty(this, "figure", _descriptor2, this);

          _initializerDefineProperty(this, "btnsNode", _descriptor3, this);

          _initializerDefineProperty(this, "chargeUI", _descriptor4, this);

          this._panelType = (_crd && PanelType === void 0 ? (_reportPossibleCrUseOfPanelType({
            error: Error()
          }), PanelType) : PanelType).Home;
          this._home = null;
        }

        // use this for initialization
        init(home, panelType) {
          this._home = home;
          this.node.active = false;
          this.anim.play('shop_reset');
          this._panelType = panelType; // this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1, 0.96), cc.scaleTo(1, 1, 1))));

          this.chargeUI.init(home, this.btnsNode);
        }

        show() {
          this.node.active = true;
          this.anim.play('shop_intro');
        }

        hide() {
          this.anim.play('shop_outro');
        }

        onFinishShow() {
          this._home.curPanel = this._panelType;
        }

        onFinishHide() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "figure", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chargeUI", [_dec4], {
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
//# sourceMappingURL=b296d1f8a60788d23a8d0f8598d03bb9b4918d27.js.map