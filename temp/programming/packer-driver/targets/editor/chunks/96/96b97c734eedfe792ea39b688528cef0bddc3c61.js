System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, MenuSidebar, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MainMenu;

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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      MenuSidebar = _unresolved_2.MenuSidebar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6ee5hQ9UtBdIh1AYw2U+2g", "MainMenu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenu", MainMenu = (_dec = property(_crd && MenuSidebar === void 0 ? (_reportPossibleCrUseOfMenuSidebar({
        error: Error()
      }), MenuSidebar) : MenuSidebar), _dec2 = property(Node), ccclass(_class = (_class2 = class MainMenu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sidebar", _descriptor, this);

          _initializerDefineProperty(this, "roller", _descriptor2, this);

          this.panelWidth = 0;
          this.tabSwitchDuration = 0;
          this.curPanelIdx = 0;
        }

        // use this for initialization
        onLoad() {
          var _this$sidebar, _this$roller;

          (_this$sidebar = this.sidebar) == null || _this$sidebar.init(this);
          this.curPanelIdx = 0;
          const pos = (_this$roller = this.roller) == null ? void 0 : _this$roller.position;

          if (pos != undefined) {
            var _this$roller2;

            (_this$roller2 = this.roller) == null || _this$roller2.setPosition(this.curPanelIdx * -this.panelWidth, pos.y, pos.z);
          }
        }

        switchPanel(idx) {
          this.curPanelIdx = idx;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sidebar", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec2], {
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
//# sourceMappingURL=96b97c734eedfe792ea39b688528cef0bddc3c61.js.map