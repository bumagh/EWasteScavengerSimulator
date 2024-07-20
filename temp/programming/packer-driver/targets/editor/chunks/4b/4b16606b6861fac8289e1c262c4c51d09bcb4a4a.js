System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameUICtrl, EventManager, Debug, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTouchEventProxy(extras) {
    _reporterNs.report("TouchEventProxy", "../Common/TouchEventProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUICtrl(extras) {
    _reporterNs.report("GameUICtrl", "./GameUICtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../Libraries/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Libraries/Debug", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameUICtrl = _unresolved_2.GameUICtrl;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "172dfUESJJCW5m+8dimoPmn", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'EventTouch', 'IPhysics2DContact', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property(_crd && GameUICtrl === void 0 ? (_reportPossibleCrUseOfGameUICtrl({
        error: Error()
      }), GameUICtrl) : GameUICtrl), _dec(_class = (_class2 = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameUICtrl", _descriptor, this);

          this.nextScale = 4;
          this.level = 1;
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).On("OnGameTouched", this.OnGameTouched, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).On("OnBallLeaveDoor", this.OnBallLeaveDoor, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Off("OnGameTouched", this.OnGameTouched, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Off("OnBallLeaveDoor", this.OnBallLeaveDoor, this);
        }

        start() {
          this.gameUICtrl.CreateOutline(1);
          this.gameUICtrl.CreateOutline(2);
          this.gameUICtrl.CreateOutline(4);
        }
        /**
         * 顺利从圈里出来
         */


        OnBallLeaveDoor(node, selfCollider, otherCollider, contact) {
          //todo 音效 分数 生成新的圈 球增大 相机变远
          this.scheduleOnce(() => {
            this.level = this.level + 1;
            this.gameUICtrl.UpdateBallPos(); // this.gameUICtrl.UpdateBallScale();

            this.gameUICtrl.UpdateBallScore();
            this.nextScale = this.nextScale * 2; // this.gameUICtrl.CreateOutline(this.nextScale);

            this.gameUICtrl.MiniCamera();

            if (this.level % 3 == 0) {
              //生成新的
              this.gameUICtrl.CreateOutline(1);
              this.gameUICtrl.CreateOutline(2);
            }
          });
        }

        OnGameTouched(proxy, event) {
          switch (proxy.eventArg) {
            case 'touch-move':
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).Log("touchmove");
              break;

            case 'touch-end':
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).Log("touchend");
              break;

            case 'touch-start':
              break;

            default:
              break;
          }

          this.gameUICtrl.BallBeat();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameUICtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b16606b6861fac8289e1c262c4c51d09bcb4a4a.js.map