System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Prefab, Node, instantiate, TabCtrl, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, MenuSidebar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTabCtrl(extras) {
    _reporterNs.report("TabCtrl", "./TabCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainMenu(extras) {
    _reporterNs.report("MainMenu", "./MainMenu", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      TabCtrl = _unresolved_2.TabCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6bf2GPwW9BhJfhOpWds9DP", "MenuSidebar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'Prefab', 'Node', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuSidebar", MenuSidebar = (_dec = property([SpriteFrame]), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), ccclass(_class = (_class2 = class MenuSidebar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabIcons", _descriptor, this);

          _initializerDefineProperty(this, "tabPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "container", _descriptor3, this);

          _initializerDefineProperty(this, "highlight", _descriptor4, this);

          _initializerDefineProperty(this, "tabWidth", _descriptor5, this);

          this.curTabIdx = -1;
          this.tabs = [];
          this.mainMenu = null;
          this.tabSwitchDuration = -1;
        }

        // use this for initialization
        init(mainMenu) {
          var _this$highlight;

          this.mainMenu = mainMenu;
          this.tabSwitchDuration = mainMenu.tabSwitchDuration;
          this.curTabIdx = 0;
          this.tabs = [];

          for (let i = 0; i < this.tabIcons.length; ++i) {
            var _this$container;

            let iconSF = this.tabIcons[i]; // use '!' to ensure that this overload is being accessed: `export function instantiate(prefab: Prefab): Node`

            let tabParent = instantiate(this.tabPrefab);
            let tab = tabParent.getComponent(_crd && TabCtrl === void 0 ? (_reportPossibleCrUseOfTabCtrl({
              error: Error()
            }), TabCtrl) : TabCtrl);
            (_this$container = this.container) == null || _this$container.addChild(tab.node);
            -tab.init({
              sidebar: this,
              idx: i,
              iconSF: iconSF
            });
            this.tabs[i] = tab;
          }

          this.tabs[this.curTabIdx].turnBig();
          const pos = (_this$highlight = this.highlight) == null ? void 0 : _this$highlight.position;

          if (pos != null) {
            var _this$highlight2;

            (_this$highlight2 = this.highlight) == null || _this$highlight2.setPosition(this.curTabIdx * this.tabWidth, pos.y, pos.z);
          }
        }

        tabPressed(idx) {
          var _this$mainMenu;

          for (let i = 0; i < this.tabs.length; ++i) {
            let tab = this.tabs[i];

            if (tab.idx === idx) {
              tab.turnBig();
            } else if (this.curTabIdx === tab.idx) {
              tab.turnSmall();
            }
          }

          this.curTabIdx = idx; // let highlightMove = cc.moveTo(this.tabSwitchDuration, cc.p(this.curTabIdx * this.tabWidth)).easing(cc.easeQuinticActionInOut());
          // this.highlight.stopAllActions();
          // this.highlight.runAction(highlightMove);

          (_this$mainMenu = this.mainMenu) == null || _this$mainMenu.switchPanel(this.curTabIdx);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabIcons", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "highlight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tabWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dac15e6414f42bbb269c9c6b6bc91ff562fce4d.js.map