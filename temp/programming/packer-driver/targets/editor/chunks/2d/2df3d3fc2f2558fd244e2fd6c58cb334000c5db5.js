System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Node, Animation, v3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TabCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuSidebar(extras) {
    _reporterNs.report("MenuSidebar", "./MenuSidebar", _context.meta, extras);
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
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e9b33B6eVBKrVUSHykREjo", "TabCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'Node', 'Animation', 'SpriteFrame', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TabCtrl", TabCtrl = (_dec = property(Sprite), _dec2 = property(Node), _dec3 = property(Animation), ccclass(_class = (_class2 = class TabCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "idx", _descriptor, this);

          _initializerDefineProperty(this, "icon", _descriptor2, this);

          _initializerDefineProperty(this, "arrow", _descriptor3, this);

          _initializerDefineProperty(this, "anim", _descriptor4, this);

          this.sidebar = null;
        }

        // use this for initialization
        init(tabInfo) {
          // sidebar, idx, iconSF
          this.sidebar = tabInfo.sidebar;
          this.idx = tabInfo.idx;

          if (this.icon != null) {
            this.icon.spriteFrame = tabInfo.iconSF;
          }

          this.node.on('touchstart', this.onPressed.bind(this), this.node);

          if (this.arrow) {
            this.arrow.scale = v3(0, 0);
          }
        }

        onPressed() {
          var _this$sidebar;

          (_this$sidebar = this.sidebar) == null || _this$sidebar.tabPressed(this.idx);
        }

        turnBig() {
          var _this$anim;

          (_this$anim = this.anim) == null || _this$anim.play('tab_turn_big');
        }

        turnSmall() {
          var _this$anim2;

          (_this$anim2 = this.anim) == null || _this$anim2.play('tab_turn_small');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "idx", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2df3d3fc2f2558fd244e2fd6c58cb334000c5db5.js.map